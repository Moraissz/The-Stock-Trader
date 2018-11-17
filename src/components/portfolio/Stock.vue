<template>
  <div class="col-xs-6">
    <div class="panel panel-info">
    <div class="panel-heading">
      <h3 class="panel-title">{{stock.name}}
        <small>(Price: ${{stock.price}} | Quantity: {{stock.quantity}})</small>
      </h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input 
        type="text" 
        class="form-control" 
        placeholder="Quantity"
        v-model="quantity"
        >
      </div>
      <div class="pull-right">
        <button 
        class="btn btn-info" 
        @click="sellSuccessful"
        >Sell</button>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
 
export default {
   data: () => ({
      quantity: 0,
      
   }),
   computed:{
     funds() {
       return this.$store.getters['portfolio/funds'];
     },
   },
   props :['stock'],
   
   methods: {
      sellSuccessful(){
          const stock = {
              id: this.stock.id,
              name: this.stock.name,
              price:this.stock.price,
              quantity:this.quantity,
          }
          this.$store.dispatch('portfolio/sellStock',stock)
        this.quantity = 0;
      }
   }
}
</script>