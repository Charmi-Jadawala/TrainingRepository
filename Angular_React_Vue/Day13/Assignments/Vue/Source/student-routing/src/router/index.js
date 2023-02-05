import { createRouter, createWebHistory } from 'vue-router'
import StudentDetails from '../views/StudentDetails.vue'
import ResultView from '../views/ResultView.vue'
import FeesView from '../views/FeesView.vue'

const routes = [
    {
        path: '/:id',
        name: 'StudentDetails',
        component: StudentDetails,
        children: [
            {
                path: 'Fees/:id',
                name: 'Fees',
                component: FeesView
            },
            {
                path: 'Result/:id',
                name: 'Result',
                component: ResultView
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
