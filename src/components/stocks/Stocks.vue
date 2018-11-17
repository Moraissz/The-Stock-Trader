<template>
    <div>
      <appStock v-for="stock in stocks" :key="stock.id" :stock="stock" ></appStock>
    </div>
    
    
</template>

<script>
import appStock from './Stock.vue'

export default {
  components: {
    appStock,
  },
  computed:{
       stocks () {
         return this.$store.getters['stocks/stocks']
       }
  },

}
</script>