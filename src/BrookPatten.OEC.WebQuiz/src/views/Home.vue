<template>
  <div class="animated fadeIn">
      <b-row>
        <b-col sm="6" lg="12">
          <b-card>
            <b-row>
              <b-col sm="6" lg="12">
                <b-btn-group>
                  <b-button to="quiz" variant="success">Chapter Quiz</b-button>
                  <b-button to="final" variant="primary">Exam Practice</b-button>
                  <b-button to="acronyms" variant="secondary">Acronyms / Mnemonics</b-button>
                  <b-button to="lists" variant="dark">Lists / Scales</b-button>
                </b-btn-group>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" lg="12">
          <b-card>
            <b-row>
              <b-col sm="6" lg="4">
                YouTube
                <ul>
                  <li><a href="https://www.youtube.com/user/EMTprepLLC/featured">EMT Prep</a></li>
                  <li><a href="https://www.youtube.com/channel/UCtZiATGABSljfqeEqlxB5vA/videos">Mad River Ski Patrol</a></li>
                  <li><a href="https://www.youtube.com/user/oeconline">OEC Online</a></li>
                </ul>
              </b-col>
              <b-col sm="6" lg="4">
                Other practice Questions
                <ul>
                  <li><a href="http://www.togskipatrol.org/chapter_review_tests_with__answe.htm">Tog Ski Patrol</a></li>
                  <li><a href="https://www.huffhillsskipatrol.org/oec-class-materials.html">Huff hills Ski Patrol</a></li>
                  <li><a href="http://eastbay-oec.org/pdf/2014%20Final%20Exam%20Ver%20A.pdf">Older practice final</a></li>
                </ul>
              </b-col>
              <b-col sm="6" lg="4">
                Other Stuff
                <ul>
                  <li><a href="http://www.nspcentral.org/docs/oec/2017OEC5eChapObjpgnum.pdf">Chapter Objectives with Page Numbers</a></li>
                  <li><a href="https://joinskipatrol.wordpress.com/2011/10/12/exam-debreif-so-what-was-actually-on-the-oec-5e-test/">OEC Test Debrief</a></li>
                  <li><a href="https://www.snynsp.org/forms/senior/Ski%20Patroller%20Manual%20-%20App%20G%20Senior%20OEC%20Exercises.pdf">Practice Scenarios</a></li>
                </ul>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
  </div>
</template>
<script>
import Question from './Question'

export default {
  name: 'home',
  components: {
      Question
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
