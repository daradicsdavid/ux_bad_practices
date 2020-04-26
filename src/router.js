import Vue from 'vue'
import AUEBadDesign from "@/components/aesthetic_usability_effect/AUEBadDesign";
import AUEGoodDesign from "@/components/aesthetic_usability_effect/AUEGoodDesign";
import Router from 'vue-router'
import DTBadDesign from "@/components/doherty_threshold/DTBadDesign";
import DTGoodDesign from "@/components/doherty_threshold/DTGoodDesign";
import FTBadDesign from "@/components/fitts_law/FTBadDesign";
import FTGoodDesign from "@/components/fitts_law/FTGoodDesign";


Vue.use(Router)
const routes = [
    {path: '/aesthetic_usability_effect/bad_design', name: 'AUEBadDesign', component: AUEBadDesign},
    {
        path: '/aesthetic_usability_effect/good_design',
        name: 'AUEGoodDesign',
        component: AUEGoodDesign
    },
    {path: '/doherty_threshold/bad_design', name: 'DTBadDesign', component: DTBadDesign},
    {path: '/doherty_threshold/good_design', name: 'DTGoodDesign', component: DTGoodDesign},
    {path: '/fitts_law/bad_design', name: 'FTBadDesign', component: FTBadDesign},
    {path: '/fitts_law/good_design', name: 'FTGoodDesign', component: FTGoodDesign}
]

const router = new Router({
    mode: 'history',
    routes
})


export default router