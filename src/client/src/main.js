import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
