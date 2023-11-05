import { createRouter, createWebHistory } from "vue-router";
import FormPwaVue from "../views/forms/FormPwa.vue";
import MealsView from "../views/meals/index.vue"
const routes = [
    {
        path:'/',
        name:'home',
        component:FormPwaVue
    },
    {
        
        path:'/meals',
        name:'meals',
        component:MealsView
        
    }
]
const router = createRouter({
    routes:routes,
    history: createWebHistory()
})
export default router