<template>
	<div>
		<h1>{{ restaurantName }}</h1>
		<p class="description">
			Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
			notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
			matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
			est difficile de s'arrêter.
		</p>

		<section class="menu">
			<h2>Menu</h2>
			<MenuItem
				@updateShoppingCart='testUpdate'
				v-for="item in simpleMenu"
				:name="item.name"
				:quantity='item.quantity'
				:image="item.image"
				:price="item.price"
				:stock='item.Stock'
				:inStock="item.inStock"
				:key="item.name"	
			/>
		</section>

		

		<div class="shopping-cart">
			<h2>Panier : {{ shoppingCart }} articles</h2>
		</div>

		<footer class="footer">
			<p>{{ copyright }}</p>
		</footer>
	</div>
</template>

<script>
import MenuItem from "../components/MenuItem"
import { mapGetters, mapState } from "vuex"
export default {
	name: "Home",
	components: {
		MenuItem
	},
	data() {
		return {
			shoppingCart:0
	}},
	computed: {
		...mapGetters({
			copyright: "copyright"
		}),
		...mapState({
			restaurantName: "restaurantName",
			simpleMenu: "simpleMenu",
			
		})
	},
	methods: {
		testUpdate(amount){
			this.shoppingCart += amount
		}
	
	}
}
</script>

<style lang="scss">
.description {
	max-width: 960px;
	font-size: 1.2rem;
	margin: 0 auto;
}
.footer {
	font-style: italic;
	text-align: center;
}
.menu {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.shopping-cart {
	position: absolute;
	right: 30px;
	top: 0;
}
</style>