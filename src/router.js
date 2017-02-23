// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router'

import Hello from './components/Hello.vue'
import Blogs from './components/Blogs.vue'
import Blog from './components/Blog.vue'


Vue.use(VueRouter)

// Story view factory
function createView() {
    return {
        render (createElement) {
            return createElement(Blogs)
        }
    }
}

const routes = [
    {
        path: '/',
        component: Blogs
    },
    {
        path: '/blog/:id',
        component: Blog
    }
];

export default new VueRouter({
    routes: routes
});
