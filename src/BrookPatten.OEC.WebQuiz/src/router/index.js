import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Home = () => import('@/views/Home')
const Final = () => import('@/views/Final')
const Quiz = () => import('@/views/Quiz')
const Acronyms = () => import('@/views/Acronyms')
const Lists = () => import('@/views/Lists')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')

Vue.use(Router)

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'quiz',
          name: 'Quiz',
          component: Quiz
        },
        {
          path: 'final',
          name: 'Final',
          component: Final
        },
        {
          path: 'acronyms',
          name: 'Acronyms',
          component: Acronyms
        },
        {
          path: 'lists',
          name: 'Lists',
          component: Lists
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
}

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})
