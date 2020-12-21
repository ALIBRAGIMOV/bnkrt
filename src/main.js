import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU'
import {store} from "./store/index";

Vue.config.productionTip = false
Vue.use(ElementUI, {locale});


new Vue({
    router,
    store,
    computed: {
        input_value: {
            get() {
                return this.$store.state.value
            },
            set(name) {
                this.$store.dispatch("setName", name)
            }
        }
    },
    render: h => h(App)
}).$mount('#app')

