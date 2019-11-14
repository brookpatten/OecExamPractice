<template>
  <div class="animated fadeIn">
      <b-row>
          <b-col sm="6" lg="12">
            <b-card>
                <b-row>
                    <b-col sm="2" lg="4">
                        Select Chapter: <b-form-select v-model="selectedChapter" v-on:change="generate()" :options="questionBank.Chapters" value-field="Number" text-field="Number"></b-form-select>
                    </b-col>
                    <b-col sm="4" lg="8">
                        <b-button-group>
                        <b-button variant="success" v-on:click="generate()">Randomize</b-button> 
                        <b-button variant="warning" v-on:click="gradeIt()">Show Results</b-button>
                        <b-button variant="danger" v-on:click="clear()">Clear Answers</b-button>
                        </b-button-group>
                    </b-col>
                </b-row>
            </b-card>
          </b-col>
      </b-row>
      <b-row v-if="showResults">
          <b-col sm="6" lg="12">
              <b-card>
                    <b-row>
                        <b-col sm="6" lg="12">
                            <h1><b-badge :variant="passingScore ? 'success' : 'danger'">{{correctQuestionsCount}} / {{currentQuiz.length}}</b-badge></h1>
                        </b-col>
                    </b-row>
              </b-card>
          </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" lg="12">
            <b-form-group v-for="(question,qindex) in currentQuiz" :key="qindex"
                        :label-for="'question_'+qindex"
                        >
                <b-card :border-variant="!showResults || question.UserAnswerLetter == null ||  question.UserAnswerLetter == '' ? 'dark' : (question.UserAnswerLetter == question.CorrectAnswerLetter ? 'success' : 'danger')">
                    <b-row>
                        <b-col sm="6" lg="12">
                            {{qindex+1}}. {{question.Text}}
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6" lg="12">
                            <b-radio-group stacked :name="'question_'+qindex" :options="question.Answers" v-model="question.UserAnswerLetter" value-field="Letter" text-field="FormattedText"></b-radio-group>
                        </b-col>
                    </b-row>
                    <b-row v-if="showResults && question.UserAnswerLetter!=question.CorrectAnswerLetter && question.UserAnswerLetter &&question.UserAnswerLetter!=''">
                        <b-col sm="6" lg="12">
                            Answer: {{question.CorrectAnswerLetter}}
                        </b-col>
                    </b-row>
                    <b-row v-if="showResults">
                        <b-col sm="6" lg="12">
                            Chapter: {{question.ChapterNumber}}
                        </b-col>
                    </b-row>
                    <b-row v-if="showResults">
                        <b-col sm="6" lg="12">
                            Objective: {{question.Objective}}
                        </b-col>
                    </b-row>
                    <b-row v-if="showResults">
                        <b-col sm="6" lg="12">
                            Reference Page: {{question.Reference}}
                        </b-col>
                    </b-row>
                </b-card>
            </b-form-group>
            <b-button v-on:click="scrollToTop()" variant="primary">Back to the Top</b-button>
        </b-col>
      </b-row>
      <BlockUI v-if="loadingCounter != 0" :message="loadingMessage">
        <i class='fa fa-cog fa-spin fa-3x fa-fw'></i>
      </BlockUI>
  </div>
</template>
<script>
import Question from './Question'

export default {
  name: 'quiz',
  components: {
      Question
  },
  props: {

  },
  computed: {
      correctQuestionsCount: function(){
          return this._.filter(this.currentQuiz,function(q){ return q.UserAnswerLetter == q.CorrectAnswerLetter }).length
      },
      passingScore: function(){
          return this.correctQuestionsCount > (this.currentQuiz.length * .8)
      }
  },
  data: function() {
      return {
          showResults: false,
          currentQuiz:[],
          selectedChapter: 1,
          loadingCounter: 0,
          loadingMessage: '',
          questionBank:{
              IsDefault: true,
              Chapters:[
                  {
                      Number: 1,
                      Questions: [
                          {
                              Number: 1,
                              ChapterNumber: 1,
                              Text: '?',
                              Answers: [
                                  {
                                      Letter: 'a',
                                      Text:''
                                  }
                              ],
                              CorrectAnswerLetter: 'a',
                              UserAnswerLetter: '',
                              Objective: '',
                              Reference: ''
                          }
                      ]
                  }
              ]
          }
      }
  },
  methods: {
      scrollToTop: function (){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      },
      generate: function(){
          
          if(this.selectedChapter>0){
            this.showResults = false
            var chapterNumber = this.selectedChapter
            this.loadingMessage = "Creating Random Quiz..."
            this.loadingCounter++
            this.currentQuiz = []
            var chapter = this._.find(this.questionBank.Chapters,{Number:chapterNumber})

            var questionCount=20;

            for(var i=0;i<questionCount;i++){
                var question = this.findRandomUnusedQuestion(this.currentQuiz,chapter.Questions)
                if(question){
                    for(var x=0;x<question.Answers.length;x++){
                        question.Answers[x].FormattedText = question.Answers[x].Letter + '. '+question.Answers[x].Text
                    }
                    this.currentQuiz.push(question)
                }
            }
            this.loadingCounter--
          }
          
      },
      findRandomUnusedQuestion(usedQuestions,allQuestions){
          var unused = this._.without(allQuestions,usedQuestions)

          var _ = this._

          var unused = this._.filter(allQuestions,function(q) { return _.indexOf(usedQuestions,q) == -1 && q.UserAnswerLetter==null })

          var randomIndex = Math.floor(Math.random() * unused.length);

          return unused[randomIndex]
      },
      fetch: function(){
          this.loadingMessage = 'Downloading Questions...'
          this.loadingCounter++
          this.$axios.get('question-bank.json')
          .then(response => {
            this.questionBank = response.data
            this.loadingCounter--
            console.info("loaded questions ok")
            this.generate()
          }).catch(response => {
            // error
            console.error(response)
            this.loadingCounter--
          })
      },
      gradeIt: function() {
          this.showResults = true
      },
      clear: function() {
          var chapterNumber = this.selectedChapter
          var chapter = this._.find(this.questionBank.Chapters,{Number:chapterNumber})
          for(var i=0;i<chapter.Questions.length;i++){
              chapter.Questions[i].UserAnswerLetter=null
          }
          this.generate()
      }
  },
  beforeMount () {

  },
  activated () {

  },
  mounted () {
      if(this.questionBank.IsDefault){
        this.fetch()
      }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>