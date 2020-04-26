import Vue from 'vue'
import AUEBadDesign from "@/components/aesthetic_usability_effect/AUEBadDesign";
import AUEGoodDesign from "@/components/aesthetic_usability_effect/AUEGoodDesign";
import Router from 'vue-router'


Vue.use(Router)
const routes = [
    {path: '/aesthetic_usability_effect/bad_design', name: 'AUEBadDesign', component: AUEBadDesign},
    {path: '/aesthetic_usability_effect/good_design', name: 'AUEGoodDesign', component: AUEGoodDesign}
]

const router = new Router({
    mode: 'history',
    routes
})


export default router