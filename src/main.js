import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import { ElTree } from "element-plus";
import "element-plus/lib/theme-chalk/el-tree.css";

const app = createApp(App);
app.component(ElTree.name, ElTree);
app.mount("#app");

