import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import Music from './views/music/Music.vue';
import Book from './views/book/Book.vue';
import Photo from './views/photo/Photo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/movie',
          component:Movie
      },
      {
          path:'/book',
          component:Book
      },
      {
          path:'/music',
          component:Music
      },
      {
          path:'/photo',
          component:Photo
      }
  ]
});
