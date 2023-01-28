import Vue from 'vue';
import store from './store/index';

require('./bootstrap');

import Posts from './components/Posts.vue';
import CreatePost from './components/CreatePost.vue';

Vue.component('list-posts', Posts);
Vue.component('create-post', CreatePost);

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    store
});