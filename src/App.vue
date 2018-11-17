<template>
    <div class="container">
        <appHeader></appHeader>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from './components/Header.vue';
import stocks from './data/stocks';
export default {
    components: {
        appHeader
    },
    created() {
        this.$store.dispatch('stocks/initStocks',stocks)
    },
}
</script>

<style>
 body{
     padding: 30px;
 }
</style>
