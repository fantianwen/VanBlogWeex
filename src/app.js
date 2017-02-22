import Root from './Root.vue'
import router from './router'
import store from './store'

new Vue(Vue.util.extend({el: '#root', router, store}, Root))

router.push('/');

