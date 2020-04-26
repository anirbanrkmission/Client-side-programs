import Home from './components/Home.vue'
import User from "./components/User.vue"

const routes = [{
    path: '*',
    name: 'home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    beforeEnter: (to, from, next) => {
      // console.log(to.params.id)
      if (to.params.id != 1) {
        next(false)
      } else {
        next()
      }
    },
    meta: {
      requiresAuth: true
    }
  }
];

export default routes
