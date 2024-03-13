import { Plugin } from '@nuxt/types'

// Import necessary components and libraries
//import SideBar from '~/components/SidebarPlugin.vue'
import VueMaterial from 'vue-material' 
import 'vue-material/dist/vue-material.css'
import 'es6-promise/auto'
import '~/assets/scss/material-dashboard.scss'

// Define the plugin
const DashboardPlugin: Plugin = {
  install(Vue) {
    // Register Sidebar plugin
   // Vue.use(SideBar)
    // Register Vue Material
    Vue.use(VueMaterial)
  }
}

export default DashboardPlugin
