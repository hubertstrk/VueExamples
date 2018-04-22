import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.directive('can', {
  inserted: function (el, binding) {
    if (!binding.value[binding.arg][Object.keys(binding.modifiers)[0]]) {
      el.classList.add('is-disabled')
      el.setAttribute('disabled', 'disabled');
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
