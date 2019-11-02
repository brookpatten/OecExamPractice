<template>
  <div class="animated fadeIn">
      <b-row>
          <b-col sm="6" lg="12">
            <b-card>
                <b-row>
                    <b-col sm="1" lg="1">
                        <b-button variant="success" v-on:click="generate()">Randomize</b-button> 
                    </b-col>
                    <b-col sm="1" lg="1">
                        <b-button variant="warning" v-on:click="gradeIt()">Results</b-button>
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
                    <b-row v-if="correctQuestionsCount<currentQuiz.length">
                        <b-col sm="6" lg="12">
                            <h2>What should you study?</h2>
                        </b-col>
                    </b-row>
                    <b-row v-if="correctQuestionsCount<currentQuiz.length">
                        <b-col sm="6" lg="12">
                            <ul>
                                <li v-for="(si,sindex) in studyItems" :key="sindex">Chapter {{si.ChapterNumber}} ({{si.count}} Incorrect)
                                    <ul>
                                        <li v-for="(oi,oindex) in si.Objectives" :key="oindex">Objective {{oi}}</li>
                                    </ul>
                                </li>
                            </ul>
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
                    <b-row v-if="showResults && question.UserAnswerLetter!=question.CorrectAnswerLetter">
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
  name: 'final',
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
      },
      studyItems: function (){
          var _ = this._

          var wrong = _.filter(this.currentQuiz,function(q){ return q.UserAnswerLetter != q.CorrectAnswerLetter })

          var chapters = _.groupBy(wrong,'ChapterNumber')

          var items = [];

          _.forEach(chapters,function(v,k){
              var item = {};
              item.count = v.length
              item.ChapterNumber = k
              item.Objectives = _.sortBy(_.uniq(_.map(v,'Objective')),function(o){return o})
              items.push(item)
          })

          items = _.sortBy(items,function(c){ return 1000 - c.count})

          return items;
      }
  },
  data: function() {
      return {
          showResults: false,
          currentQuiz:[],
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
        this.showResults = false
        this.loadingMessage = "Creating Random Exam..."
        this.loadingCounter++
        this.currentQuiz = []
        
        var questionCount=100;

        for(var i=0;i<questionCount;i++){
            var randomChapter = this.questionBank.Chapters[Math.floor(Math.random() * this.questionBank.Chapters.length)]
            var question = this.findRandomUnusedQuestion(this.currentQuiz,randomChapter.Questions)
            if(question)
            {
                for(var x=0;x<question.Answers.length;x++){
                    question.Answers[x].FormattedText = question.Answers[x].Letter + '. '+question.Answers[x].Text
                }
                this.currentQuiz.push(question)
            }
        }
        this.currentQuiz = this._.sortBy(this.currentQuiz,['ChapterNumber','Objective'])

        this.loadingCounter--
      },
      findRandomUnusedQuestion(usedQuestions,allQuestions){
          var unused = this._.without(allQuestions,usedQuestions)

          var _ = this._

          var unused = this._.filter(allQuestions,function(q) { return _.indexOf(usedQuestions,q) == -1 })

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