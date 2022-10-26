Vue.component('filter-el', {
    props: ['filter-el'],

    template: `
    <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
        <input type="text" class="search-field" v-model="userSearch">
        <button class="btn-search" type="submit" @click="filter">
            <i class="fas fa-search">Искать</i>
        </button>
    </form>
    `
})