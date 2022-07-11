import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Postgraduate from '../views/Postgraduate.vue'
import PostgraduatePortrait from "../views/PostgraduatePortrait.vue"
import MentorPortrait from "../views/MentorPortrait.vue"
import BasicStatement from "../views/BasicStatement"

import ThematicAnalysis from "../views/ThematicAnalysis"
import ForecastAlert from "../views/ForecastAlert"
import VerticalMenu from "../components/VerticalMenu"
import PostHome from "../views/PostgraduateHome/PostHome.vue"

import Login from "@/views/Login";
const routes = [
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage,
    redirect: "/posthome",
    children: [{
      path: '/posthome',
      name: 'posthome',
      component: PostHome,
    }]
  },
  {
    path: '/postgraduate',
    name: 'postgraduate',
    component: Postgraduate
  },
  {
    path: '/postgraduateportrait',
    name: 'postgraduateportrait',
    component: PostgraduatePortrait
  },
  {
    path: '/mentorportrait',
    name: 'mentorportrait',
    component: MentorPortrait
  },
  {
    path: '/basicstatement',
    name: 'basicstatement',
    component: BasicStatement
  },
  {
    path: '/forecastalert',
    name: 'forecastalert',
    component: ForecastAlert
  },
  {
    path: '/thematicanalysis',
    name: 'thematicanalysis',
    component: ThematicAnalysis
  },
  {
    path: '/verticalmenu',
    name: 'verticalmenu',
    component: VerticalMenu
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/**
 * 检测登陆状态，isLogin有值可以进行正常跳转，没有值跳转到登陆注册页
 */
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("isLogin")
  if (token || to.path === "/login") {
    // next("/posthome")
    next()
  } else {
    next("/login")
  }
})

export default router
