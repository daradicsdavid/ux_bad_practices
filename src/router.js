import Vue from 'vue'
import AUEBadDesign from "@/components/aesthetic_usability_effect/AUEBadDesign";
import AUEGoodDesign from "@/components/aesthetic_usability_effect/AUEGoodDesign";
import Router from 'vue-router'
import DTBadDesign from "@/components/doherty_threshold/DTBadDesign";
import DTGoodDesign from "@/components/doherty_threshold/DTGoodDesign";
import FTBadDesign from "@/components/fitts_law/FTBadDesign";
import FTGoodDesign from "@/components/fitts_law/FTGoodDesign";
import JLBadDesign from "@/components/jakobs_law/JLBadDesign";
import JLGoodDesign from "@/components/jakobs_law/JLGoodDesign";
import LPBadDesign from "@/components/law_of_proximity/LPBadDesign";
import LPGoodDesign from "@/components/law_of_proximity/LPGoodDesign";
import Rules from "@/components/rules/Rules";
import PLBadDesign from "@/components/postels_law/PLBadDesign";
import PLGoodDesign from "@/components/postels_law/PLGoodDesign";


Vue.use(Router)
const routes = [
    {path: '/', redirect: '/rules'},
    {path: '/rules', name: 'Rules', component: Rules},
    {path: '/aesthetic_usability_effect', redirect: '/aesthetic_usability_effect/bad_design'},
    {path: '/aesthetic_usability_effect/bad_design', name: 'AUEBadDesign', component: AUEBadDesign},
    {
        path: '/aesthetic_usability_effect/good_design',
        name: 'AUEGoodDesign',
        component: AUEGoodDesign
    },
    {path: '/doherty_threshold', redirect: '/doherty_threshold/bad_design'},
    {path: '/doherty_threshold/bad_design', name: 'DTBadDesign', component: DTBadDesign},
    {path: '/doherty_threshold/good_design', name: 'DTGoodDesign', component: DTGoodDesign},
    {path: '/fitts_law', redirect: '/fitts_law/bad_design'},
    {path: '/fitts_law/bad_design', name: 'FTBadDesign', component: FTBadDesign},
    {path: '/fitts_law/good_design', name: 'FTGoodDesign', component: FTGoodDesign},
    {path: '/jakobs_law', redirect: '/jakobs_law/bad_design'},
    {path: '/jakobs_law/bad_design', name: 'JLBadDesign', component: JLBadDesign},
    {path: '/jakobs_law/good_design', name: 'JLGoodDesign', component: JLGoodDesign},
    {path: '/law_of_proximity', redirect: '/law_of_proximity/bad_design'},
    {path: '/law_of_proximity/bad_design', name: 'LPBadDesign', component: LPBadDesign},
    {path: '/law_of_proximity/good_design', name: 'LPGoodDesign', component: LPGoodDesign},
    {path: '/postels_law', redirect: '/postels_law/bad_design'},
    {path: '/postels_law/bad_design', name: 'PLBadDesign', component: PLBadDesign},
    {path: '/postels_law/good_design', name: 'PLGoodDesign', component: PLGoodDesign}
]

const router = new Router({
    mode: 'history',
    routes
})


export default router