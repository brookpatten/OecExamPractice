<template>
  <div class="animated fadeIn">
      <b-row>
        <b-col sm="6" lg="3">
            <b-card no-body class="bg-primary">
            <b-card-body class="pb-0">
            </b-card-body>
            </b-card>
        </b-col>
      </b-row>
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
  data: function() {
      return {
          questionBank:{
              chapters:[
                  {
                      number: 1,
                      questions: [
                          {
                              number: 1,
                              chapterNumber: 1,
                              text: '?',
                              answers: [
                                  {
                                      letter: 'a',
                                      text:''
                                  }
                              ],
                              correctAnswerLetter: 'a',
                              objective: '',
                              reference: ''
                          }
                      ]
                  }
              ]
          }
      }
  },
  methods: {
      generate: function(){

      },
      fetch: function(){
          this.$axios.get('question-bank.json')
          .then(response => {
            this.questionBank = response.data
            //this.loadingCounter--
            console.info("loaded questions ok")
          }).catch(response => {
            // error
            console.error(response)
            //this.loadingCounter--
          })
      }
  },
  beforeMount () {

  },
  activated () {

  },
  mounted () {
      this.fetch()
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>