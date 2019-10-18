import Vue from 'vue';
import './plugins/axios'
import App from './App.vue';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import './style/common.scss'


const requireComponent = require.context(
  // 其组件目录的相对路径
  './base-components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = (fileName.split('/').pop() as string).replace(/\.\w+$/, '')
  // console.log(componentName)
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

Vue.component('BaseDraggable',()=>import('vuedraggable'))

Vue.config.productionTip = false;
Vue.use(Antd)


new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
