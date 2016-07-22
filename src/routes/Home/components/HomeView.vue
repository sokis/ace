<template>
  <div class="list-container">
    <v-list :articles="list" :date="format"></v-list>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import vList from './List'


export default {
    data(){

      const date = new Date()
      const pad = (val) => {
          val += ''
          if (val.length < 2) {
              return '0' + val
          }
          return val
      }

      return {
          format: date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
      }
    },
    components:{
      vList
    },
    computed: {
      ...mapGetters(['list'])
    },
    methods: mapActions(['getAticles']),
    route: {
        data: function (transition) {
          this.getAticles(this.value)
          transition.next()
        }
    }
}
</script>

<style src="./styles.css"></style>