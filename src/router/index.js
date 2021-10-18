import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import(/* webpackChunkName: "cadastro" */ '../views/Cadastro.vue')
  },
  {
    path: '/pessoascad',
    name: 'PessoasCad',
    component: () => import(/* webpackChunkName: "pessoascad" */ '../views/PessoasCad.vue')
  },
  {
    path: '/paises',
    name: 'Paises',
    component: () => import(/* webpackChunkName: "paises" */ '../views/Paises.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
