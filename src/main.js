import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
