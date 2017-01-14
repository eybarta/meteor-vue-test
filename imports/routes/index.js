import Home from '/imports/ui/Home.vue';
// import CartsBank from '/imports/ui/pages/CartsBank.vue';
// import Cart from '/imports/ui/pages/Cart.vue';

console.log("HOME > ", Home);
export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	}
]