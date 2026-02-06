import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import GuardarView from '@/views/GuardarView.vue'
import BorrarView from '@/views/BorrarView.vue'
import ConsultarPorIdView from '@/views/ConsultarPorIdView.vue'
import LoginView from '@/views/LoginView.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,

  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/porid',
    name: 'CPorId',
    component: ConsultarPorIdView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: ActualizarView,
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    }
  },
  {
    path: '/actualizarP',
    name: 'ActualizarParcial',
    component: ActualizarParcialView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/guardar',
    name: 'Guardar',
    component: GuardarView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/borrar',
    name: 'Borrar',
    component: BorrarView,
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*Configuracion del Guardian */
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    const estaAutenticado = localStorage.getItem("estaAutenticado");
    const token = localStorage.getItem("token");
    if (!estaAutenticado) {
      /*le envio a una pagina de login*/
      console.log("R. a Login");
      next({ name: 'login' })
    }else{
      next();
    }
  } else {
    /*le dejo sin validaciones*/
    console.log("Pase libre");
    next();
  }
})

export default router
