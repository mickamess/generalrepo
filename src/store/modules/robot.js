import axios from 'axios'; // gestion des requetes HTTP

export default {
  namespaced: true,
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
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },
  getters: { /* on accède aux getters vis this.$store.getters */
    cartSalesItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
};
