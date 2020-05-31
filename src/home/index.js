import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    restaurantName: "La belle vue",
    simpleMenu: [
			{
				name: "Croissant",
				image: {
					source: "/images/croissant.jpg",
					alt: "Un croissant"
				},
        inStock: true,
        Stock: 1,
				quantity: 1,
				price: 2.99
			},
			{
				name: "Baguette de pain",
				image: {
					source: "/images/french-baguette.jpeg",
					alt: "Quatre baguettes de pain"
				},
        inStock: true,
        Stock: 1,
				quantity: 1,
				price: 3.99
			},
			{
				name: "Éclair",
				image: {
					source: "/images/eclair.jpg",
					alt: "Éclair au chocolat"
				},
        inStock: true,
        Stock: 1,
				quantity: 1,
				price: 4.99
			}
		]
		
	},
	getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		}
	},
	mutations: {
    MODIFIFY_STOCK(state, amount){
       state.Stock -= amount
    }

  },
	actions: {

    updateStock(context, amount) {

        context.commit('MODIFIFY_STOCK', amount)
  
		}

  },
	modules: {}
})