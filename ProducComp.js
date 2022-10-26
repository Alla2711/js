Vue.component('products', {
    props: ['products'],
    template: `
    <div class="basket_goods">
    <product v-for="item of products" :key="item.id-product" :product="item"></product>
    </div>
    `
});
Vue.component('product', {
    props: ['product'],
    template: `
    <div class="product-item">
        <div class="desc">
            <h3 class="product_name">{{product.product_name}}</h3>
            <p>{{product.price}}</p>
            <button class="buy-btn" @click="$parent.$emit('add-product',product)">Добавить в корзину</button>
        </div>
    </div>
    `
})