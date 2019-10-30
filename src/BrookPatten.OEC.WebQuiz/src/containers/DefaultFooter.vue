<template>
      <TheFooter>
        <div>
          <!--footer-->
          <a href="http://brookp.me">This garbage App by Brook Patten</a>
          <!--<span class="ml-1">&copy; 2018 creativeLabs.</span>-->
        </div>
        <div class="ml-auto">
          <a href="http://nsp.org" pull-right>Questions & Answers property of NSP</a>
        </div>
      </TheFooter>
</template>
<script>
import { Footer as TheFooter } from '@coreui/vue'
export default {
  name: 'DefaultFooter',
  components: {
    TheFooter
  },
}
</script>
