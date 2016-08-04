<template>
  <div class="v-about">
    <h1>
      About{{userInfo}}
    </h1>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-about',
  data(){
    return {
      userInfo:{}
    }
  },
  computed: {
      ...mapGetters(["userInfo"])
    },
    methods: {
      getUserInfo:(){
        ajax(function(user){
          this.userInfo = user
        })
      }
      ...mapActions(['getUserInfo'])
    },
    ready(){
      this.getUserInfo()
    }
}
</script>