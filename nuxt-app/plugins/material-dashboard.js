// // import Vue from 'vue'
// // import VueMaterial from 'vue-material'
// // import 'vue-material/dist/vue-material.min.css'
// // import 'vue-material/dist/theme/default.css'

// // Vue.use(VueMaterial)


// // import { createApp } from 'vue'
// // import VueMaterial from 'vue-material'
// // import 'vue-material/dist/vue-material.min.css'
// // import 'vue-material/dist/theme/default.css'

// // export default function ({ app }) {
// //   const vueApp = createApp({})
// //   vueApp.use(VueMaterial)
// //   app.use(vueApp)
// // }

// import Vue from "vue"
// import mdcAutoInit from "@material/auto-init"
// import { MDCTextField } from "@material/textfield"
// import { MDCTextFieldIcon } from "@material/textfield/icon"
// import { MDCSelect } from "@material/select"
// import { MDCFormField } from "@material/form-field"
// import { MDCRadio } from "@material/radio"

// function init() {
//   /** Select */
//   mdcAutoInit.register("select", MDCSelect)

//   /** TextField */
//   mdcAutoInit.register("textfield", MDCTextField)
//   mdcAutoInit.register("textfieldIcon", MDCTextFieldIcon)

//   /** Radio */
//   mdcAutoInit.register("formfield", MDCFormField)
//   mdcAutoInit.register("radio", MDCRadio)

//   // /** Auto Init */
//   mdcAutoInit.apply()
// }

// const plugin = {
//   install(vm) {
//     console.log("Installing")

//     vm.component(MDCTextFieldIcon)
//     vm.component(MDCTextField)
//     vm.component(MDCSelect)
//     vm.component(MDCFormField)
//     vm.component(MDCRadio)

//     init()
//   }
// }

// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(plugin)
// } else {
//   Vue.use(plugin)
// }