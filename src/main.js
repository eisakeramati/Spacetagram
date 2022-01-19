import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import copyText from "@meforma/vue-copy-to-clipboard"

library.add(fas)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(copyText)
.mount('#app')
