import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './components/MainPage.vue';
import AlbumFeed from './components/AlbumFeed.vue';
import AlbumView from './components/AlbumView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/albums',
      component: AlbumFeed,
    },
    {
      path: '/albums/:id',
      component: AlbumView,
    },
  ],
});
