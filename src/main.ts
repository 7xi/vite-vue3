import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './router/permission';
import store from "./store";
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Skeleton, Cell, CellGroup, List, PullRefresh, Tab, Tabs, Tag, Image, Button, Loading, Icon } from 'vant'
import 'lib-flexible/flexible'
import 'vant/lib/index.css';
import './assets/styles/base.less'
import "./utils/rem"
import Layout from './components/Layout.vue'

const app = createApp(App)
app.component('layout',Layout)

app.use(router);
app.use(store);
app.use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(Cell)
    .use(CellGroup)
    .use(List)
    .use(PullRefresh)
    .use(Tab)
    .use(Tabs)
    .use(Tag)
    .use(Image)
    .use(Button)
    .use(Loading)
    .use(Icon)
app.mount('#app');
