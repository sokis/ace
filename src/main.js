import Vue from 'vue'
import Router from 'vue-router'
import Validator from 'vue-validator';
import App from 'App'
import { routes, alias }  from './routes'
import store from 'vuex/store'

if (module.hot) {
	module.hot.accept()
}

Vue.config.debug = __DEV__

// global mixins
Vue.mixin({
	store
})

Vue.use(Router)
Vue.use(Validator)

const router = new Router({
	history: false,
	saveScrollPosition: true,
	linkActiveClass: 'link-active'
})

// register routes
router.map(routes)
router.alias(alias)

//
//全局钩子函数
router.beforeEach(transition => {
	store.dispatch('setProgress', 80)
	if (transition.to.auth && !store.getters.auth) {
		// 对用户身份进行验证...
		transition.abort()
	} else {
		transition.next()
	}
})

router.afterEach(transition => {
	store.dispatch('setProgress', 100)
	window.scrollTo(0, 0)
})

router.start(App, '#app')
