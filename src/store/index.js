import Vue from 'vue';
import Vuex from 'vuex'; // le store vuex
import robotsModule from './modules/robot';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
