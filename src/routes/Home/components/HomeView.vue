<template>
  <div class="list-container">
    console...
    {{list}}
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import vList from './List'
export default {
    components:{
    // vList
    },
    computed: {
    ...mapGetters(['list'])
    },
    methods: mapActions(['getAticles']),
    route: {
        data: function (transition) {
          this.getAticles()
          transition.next()
        }
    }
}
</script>

<style src="./styles.css"></style>