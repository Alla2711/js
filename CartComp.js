Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `<div class="cart-block" v-show="visibility">
    <p v-if="!cartItems.lenght">Нет данных</p>
    <cart-item class="cart-item" v-for="item of cartItems" :key="item.id_product" :cart-item="item">
    </cart-item>
</div>`
});
Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart-item">
        <div class="product-bio">
            <div class="product-desc">
                <p class="product-title">{{cartItem.product_name}}</p>
                <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                <p class="product-single-price">$ {{cartItem.price}}</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
            <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
        </div>
    </div>
    `
})