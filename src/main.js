import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全部引入 element plus
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as EleIcons from '@element-plus/icons-vue'
import * as Icons from "@element-plus/icons"
//引入echarts
// import * as echarts from "echarts"

const app = createApp(App)
for (const name in EleIcons) {
    app.component(name, EleIcons[name])
}
app.component(Icons)
// app.use(echarts)
app.use(store).use(router).use(ElementPlus, { locale: zhCn, size: "small" }).mount('#app')

