import { createRouter, createWebHistory } from "vue-router";
import FormPwaVue from "../views/forms/FormPwa.vue";
import HomePage from "../views/home/index.vue";
import MealsView from "../views/meals/index.vue"
import DefaultLayout from "../composables/Layout.vue"
const routes = [
    {
        path:'/',
        component:DefaultLayout,
        children:[
            {
                path:'/',
                name:'home',
                component:HomePage
            },
            {
                path:'/form',
                name:'form',
                component:FormPwaVue
            },
            {
                
                path:'/meals',
                name:'meals',
                component:MealsView
                
            }
        ]
    }
]
const router = createRouter({
    routes:routes,
    history: createWebHistory()
})
export default router