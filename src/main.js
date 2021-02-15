import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import { ElTree } from "element-plus";
import "element-plus/lib/theme-chalk/el-tree.css";
import { createPinia } from 'pinia'

const app = createApp(App);

app.use(createPinia())

app.component(ElTree.name, ElTree);

app.config.devtools = true

app.mount("#app");
