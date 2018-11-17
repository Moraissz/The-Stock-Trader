<template>
  <div class="col-xs-6">
    <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">{{stock.name}}
        <small>(Price: ${{stock.price}})</small>
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
        class="btn btn-success" 
        @click="buySuccessful"
        :disabled="isNotValidated || insufficientFunds"
        >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
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
     isNotValidated () {
       return this.quantity <= 0;
     },
     insufficientFunds () {
       return this.funds <= this.stock.price * this.quantity; 
     }
   },
   props :['stock'],
   
   methods: {
      buySuccessful(){
          const stock = {
              id: this.stock.id,
              name: this.stock.name,
              price:this.stock.price,
              quantity:this.quantity,
          }
          this.$store.dispatch('stocks/buySuccessful',stock)
        this.quantity = 0;
      }
   }
}
</script>