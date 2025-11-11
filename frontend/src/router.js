import { sessionStore } from '@/stores/session'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'Students' },
    name: 'Home',
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('@/pages/Students.vue'),
    meta: { scrollPos: { top: 0, left: 0 } },
  },
  {
    path: '/students/:studentId',
    name: 'Student',
    component: () => import('@/pages/Student.vue'),
    props: true,
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/pages/Courses.vue'),
    meta: { scrollPos: { top: 0, left: 0 } },
  },
  {
    path: '/courses/:courseId',
    name: 'Course',
    component: () => import('@/pages/Course.vue'),
    props: true,
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('@/pages/Certificates.vue'),
    meta: { scrollPos: { top: 0, left: 0 } },
  },
  {
    path: '/certificates/:certificateId',
    name: 'Certificate',
    component: () => import('@/pages/Certificate.vue'),
    props: true,
  },
  {
    path: '/programs',
    name: 'Programs',
    component: () => import('@/pages/Programs.vue'),
    meta: { scrollPos: { top: 0, left: 0 } },
  },
  {
    path: '/programs/:programId',
    name: 'Program',
    component: () => import('@/pages/Program.vue'),
    props: true,
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: () => import('@/pages/Instructors.vue'),
    meta: { scrollPos: { top: 0, left: 0 } },
  },
  {
    path: '/instructors/:instructorId',
    name: 'Instructor',
    component: () => import('@/pages/Instructor.vue'),
    props: true,
  },
  {
    path: '/assessments',
    name: 'Assessments',
    component: () => import('@/pages/Assessments.vue'),
  },
  {
    path: '/templates',
    name: 'Templates',
    component: () => import('@/pages/Templates.vue'),
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('@/pages/Reports.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/education/'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let { isLoggedIn } = sessionStore()

  isLoggedIn = await isLoggedIn()

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
