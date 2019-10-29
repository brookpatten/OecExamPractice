<template>
  <div class="animated fadeIn">
      home
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