import Vue from 'vue'
import App from './app.vue'

import './common/styles/main.css'
import './common/styles/vue.styl'
import './common/images/toolbox.jpg'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)