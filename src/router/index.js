import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
      meta: {
        title: '测试页面',
        requiresAuth: false,
        roleId: 1
      }
    },
    /* 信息互通start */
    {
      path: '/register',
      name: 'Register',
      component: () => import( /* webpackChunkName: "Register" */ '@/views/register/Register'),
      meta: {
        title: '注册',
        requiresAuth: false,
        roleId: 1
      }
    },
    /* 答谢晚宴-cxj */
    {
      path: '/appreciationdinnerone',
      name: 'AppreciationDinnerOne',
      component: () => import( /* webpackChunkName: "testCxj" */ '@/views/testCxj/AppreciationDinnerOne'),
      meta: {
        title: '答谢晚宴',
        requiresAuth: false,
        roleId: 1
      }
    },
    {
      path: '/appreciationdinnertwo',
      name: 'AppreciationDinnerTwo',
      component: () => import( /* webpackChunkName: "testCxj" */ '@/views/testCxj/AppreciationDinnerTwo'),
      meta: {
        title: '答谢晚宴',
        requiresAuth: false,
        roleId: 1
      }
    },
    {
      path: '/mettingarrangment',
      name: 'MeetingArrangement',
      component: () => import( /* webpackChunkName: "testCxj" */ '@/views/testCxj/MeetingArrangement'),
      meta: {
        title: '会议安排',
        requiresAuth: false,
        roleId: 1
      }
    },
    {
      path: '/meetingschedule',
      name: 'MeetingSchedule',
      component: () => import( /* webpackChunkName: "testCxj" */ '@/views/testCxj/MeetingSchedule'),
      meta: {
        title: '会议日程',
        requiresAuth: false,
        roleId: 1
      }
    },
    {
      path: '/meetingscheduletwo',
      name: 'MeetingScheduleTwo',
      component: () => import( /* webpackChunkName: "testCxj" */ '@/views/testCxj/MeetingScheduleTwo'),
      meta: {
        title: '会议日程',
        requiresAuth: false,
        roleId: 1
      }
    },
    {
      path: '/meetingschedulethree',
      name: 'MeetingScheduleThree',
      component: () => import( /* webpackChunkName: "testCxj" */ '@/views/testCxj/MeetingScheduleThree'),
      meta: {
        title: '会议日程',
        requiresAuth: false,
        roleId: 1
      }
    },
    {
      path: '/meetingschedulefour',
      name: 'MeetingScheduleFour',
      component: () => import( /* webpackChunkName: "testCxj" */ '@/views/testCxj/MeetingScheduleFour'),
      meta: {
        title: '会议日程',
        requiresAuth: false,
        roleId: 1
      }
    },
  ]
})
