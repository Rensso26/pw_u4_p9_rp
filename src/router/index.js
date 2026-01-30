import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import GuardarView from '@/views/GuardarView.vue'
import BorrarView from '@/views/BorrarView.vue'
import ConsultarPorIdView from '@/views/ConsultarPorIdView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/porid',
    name: 'CPorId',
    component: ConsultarPorIdView
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: ActualizarView
  },
  {
    path: '/actualizarP',
    name: 'ActualizarParcial',
    component: ActualizarParcialView
  },
  {
    path: '/guardar',
    name: 'Guardar',
    component: GuardarView
  },
  {
    path: '/borrar',
    name: 'Borrar',
    component: BorrarView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
