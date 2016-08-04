<template>
  <div class="v-login">
    <h3> 登陆 </h3>
    <v-panel>
      <validator name="validation">
        <form class="v-form" @submit.prevent="login" autocomplete="off" novalidate>
          <div class="v-form-cells">
            <v-form-cell title="用户名">
              <input class="v-textfield-input" v-validate:username="['required']" placeholder="用户名" type="text" debounce="500">
            </v-form-cell>
            <v-form-cell title="密码">
              <input class="v-textfield-input" v-validate:password="['required']" placeholder="密码" type="password" debounce="500">
            </v-form-cell>
            <v-panel>
              <v-button class="primary" type="submit" v-if="$validation.valid">提交</v-button>
            </v-panel>
          </div>
        </form>
      </validator>
    </v-panel>
  </div>
</template>
<script>
  import vPanel from 'components/Panel'
  import vFormCell from 'components/FormCell'
  import vButton from 'components/Button'

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'v-login',
    data(){
      return {
        username:"",
        password:""
      }
    },
    computed: {
      ...mapGetters(['auth'])
    },
    route: {
      activate (transition) {
        transition.next()
        this.auth && this.$route.router.go('/themes')
      }
    },
    watch: {
      auth (val) {
        if (val) {
          this.$nextTick(() => {
            this.$route.router.go('/themes')
          })
        }
      }
    },
    methods:{
      ...mapActions(['setEnv']),
      login(){
        let self = this
        this.$validate(true, function () {
          if (self.$validation.valid) {
            self.setEnv({
              auth: true
            })
          }
        })
      }
    },
    components:{
      vPanel,
      vFormCell,
      vButton
    }
  }
</script>
<style>
  .v-form {}
  
  .v-form-title {}
  
  .v-form-cells {
    background-color: white;
    border: 1px solid color(white lightness(-10%));
    border-radius: 0.25rem;
  }
  
  .v-textfield {}
  
  .v-textfield-input {
    color: color(black lightness(+40%));
    outline: none;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    width: 100%;
    height: inherit;
  }
</style>