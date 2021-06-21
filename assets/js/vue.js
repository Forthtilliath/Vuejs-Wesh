import products from './datas/productsData.js';

const Home = {
    template: '#home',
    name: 'Home',
    data: () => {
        return {
            products,
            searchKey: '',
            liked: [],
            cart: [],
        };
    },
    computed: {
        filteredList() {
            return this.products.filter((product) =>
                product.description.toLowerCase().includes(this.searchKey.toLowerCase()),
            );
        },
        getLikeCookie() {
            let cookieValue = JSON.parse($cookies.get('like'));
            this.liked = cookieValue == null ? [] : cookieValue;
        },
        cartTotalAmount() {
            let total = 0;
            this.cart.map((product) => (total += product.quantity * product.price));
            return total;
        },
        itemTotalAmount() {
            let itemTotal = 0;
            this.cart.map((product) => (itemTotal += product.quantity));
            return itemTotal;
        },
        getCartCookie() {
            let cookieValue = JSON.parse($cookies.get('cart'));
            this.cart = cookieValue == null ? [] : cookieValue;
        }
    },
    methods: {
        addToCart(product) {
            let index = this.cart.findIndex((prod) => prod.id == product.id);
            if (index == -1) {
                this.cart.push({
                    ...product,
                    quantity: 1,
                });
            } else {
                this.cart[index].quantity++;
            }
        },
        cartEditQuantity(product, quantity, id) {
            product.quantity += quantity;
            if (product.quantity == 0) this.cartRemoveItem(id);
        },
        cartRemoveItem(id) {
            this.$delete(this.cart, id);
        },
    },
    mounted: function () {
        this.getLikeCookie;
        this.getCartCookie;
    },
    watch: {
        liked: function () {
            $cookies.set('like', JSON.stringify(this.liked));
        },
        cart: {
            handler() {
                $cookies.set('cart', JSON.stringify(this.cart));
            },
            deep: true,
        }
    },
};
const UserSettings = {
    template: '<h1>UserSettings</h1>',
    name: 'UserSettings',
};
const WishList = {
    template: '<h1>WishList</h1>',
    name: 'WishList',
};
const ShoppingCart = {
    template: '<h1>ShoppingCart</h1>',
    name: 'ShoppingCart',
};

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: Home.name,
        },
        {
            path: '/user-settings',
            component: UserSettings,
            name: UserSettings.name,
        },
        {
            path: '/wish-list',
            component: WishList,
            name: WishList.name,
        },
        {
            path: '/shopping-cart',
            component: ShoppingCart,
            name: ShoppingCart.name,
        },
    ],
});

const vue = new Vue({
    router,
}).$mount('#app');
