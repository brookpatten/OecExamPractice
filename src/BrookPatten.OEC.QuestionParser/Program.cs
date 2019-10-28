using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Xceed.Document;
using Xceed.Words;
using Newtonsoft.Json;
using Xceed.Document.NET;
using Xceed.Words.NET;

namespace BrookPatten.OEC.QuestionParser
{
    class Program
    {
        /// <summary>
        /// steps to make this thing chooch
        /// 1) download a bank of questions from one of the various online sources
        /// examples:
        ///     http://www.togskipatrol.org/chapter_review_tests_with__answe.htm
        ///     https://www.huffhillsskipatrol.org/oec-class-materials.html
        /// 2) Convert any files not in .docx format to docx by opening in word and then re-saving as .docx
        /// 3) change the path below to the folder where you're keeping them
        /// 4) pay attention to any "unexpected paragraph" messages and figure out where the file in question is formatted atypically
        /// 5) profit
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            string path;
            if (args.Length > 0)
            {
                path = args[0];
            }
            else
            {
                //me being lazy
                path = @"C:\Users\brook\Desktop\OEC";
            }

            var files = Directory.GetFiles(path, "*.docx").OrderBy(x => x).ToList();

            Console.WriteLine($"Found {files.Count} .docx files in {path}");

            QuestionBank bank = new QuestionBank() { Chapters = new List<Chapter>() };


            foreach (var file in files)
            {
                //hack if you want to troubleshoot 1 specific problematic file
                //if(!file.Contains("ch36"))
                    //continue;

                Console.WriteLine($"Processing {file}");
                try
                {
                    var chapter = ProcessFile(file);
                    bank.Chapters.Add(chapter);
                    Console.WriteLine($"\rSuccess (Chapter {chapter.Number}, {chapter.Questions.Count} questions)");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"\rFailed ({ex.Message})");
                }

            }

            string json = JsonConvert.SerializeObject(bank);
            string outputPath = Path.Combine(path, "question-bank.json");
            if (File.Exists(outputPath))
            {
                File.Delete(outputPath);
            }
            using (var fs = new StreamWriter(outputPath, false))
            {
                fs.Write(json);
                fs.Flush();
                fs.Close();
            }

            Console.WriteLine($"Questions saved to {outputPath}. Press Enter");
            Console.ReadLine();
        }

        public static Chapter ProcessFile(string file)
        {
            char[] answerLetters = new char[] { 'a', 'b', 'c', 'd' };

            var docx = DocX.Load(file);
            var chapter = new Chapter() { Questions = new List<Question>() };
            var paragraphs = docx.Paragraphs.ToList();

            string chapterNumberText = new FileInfo(file).Name;
            chapterNumberText = chapterNumberText.Replace("ch", "");
            chapterNumberText = chapterNumberText.Substring(0, chapterNumberText.IndexOf("."));
            
            try
            {
                chapter.Number = int.Parse(chapterNumberText);
            }
            catch(Exception ex)
            {
                throw new Exception("Failed to parse Chapter number", ex);
            }


            int questionIndex = 1;

            int paragraphIndex = FindNextNonWhitespaceParagraph(paragraphs);

            while(paragraphIndex < paragraphs.Count)
            {
                var questionParagraph = paragraphs[paragraphIndex];
                Console.Write($"\rChapter {chapter.Number} Paragraph {paragraphIndex}/{paragraphs.Count}");

                //if this is the beginning of the expectedIndex
                if (questionParagraph.Text.Trim().StartsWith($"{questionIndex}.") || questionParagraph.Text.Trim().StartsWith($"{questionIndex}:") || questionParagraph.IsListItem)
                {
                    var question = new Question() { Answers = new List<Answer>() };
                    question.ChapterNumber = chapter.Number;
                    question.Number = questionIndex;

                    //some paragraphs are list items, some aren't
                    if (questionParagraph.IsListItem)
                    {
                        question.Text = questionParagraph.Text.Trim();
                    }
                    else
                    {
                        question.Text = questionParagraph.Text.Replace($"{questionIndex}.", "").Replace($"{questionIndex}:", "").Trim();
                    }

                    //some questions have the number and text on seperate lines, if this happens we need to read another
                    if(string.IsNullOrWhiteSpace(question.Text))
                    {
                        paragraphIndex = FindNextNonWhitespaceParagraph(paragraphs, paragraphIndex);
                        questionParagraph = paragraphs[paragraphIndex];
                        question.Text = questionParagraph.Text.Trim();
                    }

                    for(int i=0;i<4;i++)
                    {
                        paragraphIndex = FindNextNonWhitespaceParagraph(paragraphs, paragraphIndex);
                        var answerParagraph = paragraphs[paragraphIndex];
                        if(answerParagraph.IsListItem)
                        {
                            var answer = new Answer();
                            answer.Text = answerParagraph.Text.Trim();
                            answer.Letter = answerLetters[i] + "";
                            question.Answers.Add(answer);
                        }
                        else if(answerParagraph.Text.Trim().StartsWith($"{answerLetters[i]}."))
                        {
                            var answer = new Answer();
                            answer.Text = answerParagraph.Text.Replace($"{answerLetters[i]}.","").Trim();
                            answer.Letter = answerLetters[i] + "";
                            question.Answers.Add(answer);
                        }
                        else
                        {
                            Console.WriteLine("\rFound Unexpected paragraph when looking for answer, discarding: " + questionParagraph.Text);
                        }

                        if((question.Answers.Any(x=>x.Text.ToLower()=="yes") && question.Answers.Any(x => x.Text.ToLower() == "no"))
                            || (question.Answers.Any(x => x.Text.ToLower() == "true") && question.Answers.Any(x => x.Text.ToLower() == "false")))
                        {
                            int testIndex = FindNextNonWhitespaceParagraph(paragraphs, paragraphIndex);
                            if(!paragraphs[testIndex].IsListItem && !paragraphs[testIndex].Text.StartsWith($"{answerLetters[i+1]}."))
                            {
                                //it's a true/false question, there's only 2 answers
                                break;
                            }
                        }
                    }

                    paragraphIndex = FindNextNonWhitespaceParagraph(paragraphs, paragraphIndex);
                    if(paragraphs[paragraphIndex].Text.StartsWith("Answer:"))
                    {
                        question.CorrectAnswerLetter = paragraphs[paragraphIndex].Text.Replace("Answer:", "").Trim();
                    }
                    paragraphIndex = FindNextNonWhitespaceParagraph(paragraphs, paragraphIndex);
                    if (paragraphs[paragraphIndex].Text.StartsWith("Objective:"))
                    {
                        question.Objective = paragraphs[paragraphIndex].Text.Replace("Objective:", "").Trim();
                    }
                    paragraphIndex = FindNextNonWhitespaceParagraph(paragraphs, paragraphIndex);
                    if (paragraphs[paragraphIndex].Text.StartsWith("Reference:"))
                    {
                        question.Reference = paragraphs[paragraphIndex].Text.Replace("Reference:", "").Trim();
                    }

                    chapter.Questions.Add(question);
                    questionIndex++;
                }
                else if(!string.IsNullOrWhiteSpace(questionParagraph.Text))
                {
                    Console.WriteLine("\rFound Unexpected paragraph when looking for question, discarding: " + questionParagraph.Text);
                }
                else
                {
                    //useless whitespace that we don't care about
                }
                paragraphIndex = FindNextNonWhitespaceParagraph(paragraphs, paragraphIndex);
            }

            return chapter;
        }

        public static int FindNextNonWhitespaceParagraph(IList<Paragraph> paragraphs,int paragraphIndexStart=-1)
        {
            var index = paragraphIndexStart + 1;
            while (index < paragraphs.Count && string.IsNullOrWhiteSpace(paragraphs[index].Text))
            {
                index++;
            }
            return index;
        }
    }

    public class QuestionBank
    {
        public List<Chapter> Chapters { get; set; }
    }

    public class Chapter
    {
        public int Number { get; set; }
        public List<Question> Questions { get; set; }
    }

    public class Question
    {
        public int Number { get; set; }
        public int ChapterNumber { get; set; }
        public string Text { get; set; }
        public List<Answer> Answers { get; set; }
        public string CorrectAnswerLetter { get; set; }
        public string Objective { get; set; }
        public string Reference { get; set; }
    }

    public class Answer
    {
        public string Letter { get; set; }
        public string Text { get; set; }
    }
}
