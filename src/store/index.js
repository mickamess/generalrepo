import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
  },
  mutations: { /* Tous les changements du store
  doivent être fait avec les mutations. on ne peut pas acceder aux éléments du state puis
les modifier . On accede à la mutation via this.$store.commit */
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: { /* on accède aux action avec this.$store.dispatch dans les composants */
    getParts({ commit }) { /* le paramètre de base est "context", qu'on déconstruit pour
    prendre seulement commit. Il y a normalement {state, getters, commit, dispatch} */
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
  },
  getters: { /* on accède aux getters vis this.$store.getters */
    cartSalesItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
});
