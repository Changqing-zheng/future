import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';
import ComponentA from './views/ComponentA.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
          alias:"/abc"
        },
      {
          path: '/mine',
          component: Mine,
          children:[
              {
                  path:"test1",
                  name:"test1",
                  component:Test1
              },
              {
                  path:"test2/:name/:age",
                  component:Test2
              }
          ]
      },
      {
          path:"/home",
          redirect:"/"
      },
      {
          path:"/redirect/:name/:age",
          redirect:"/mine/test2/lisi/12"
      },
      {
          path:"*",
          component: Error
      },
      {
          path:'/componenta',
          component:ComponentA
      }
  ],
});
