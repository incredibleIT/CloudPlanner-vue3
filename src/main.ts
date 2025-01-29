import {createApp} from "vue";


import ElementPlus from "element-plus";
import Task from "./components/Task1.vue"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router";
import VueCal from 'vue-cal'
const home = createApp(Task);
home.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    home.component(key, component)
}



home.use(ElementPlus);

home.mount('#app');


