<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link
          class="navbar-brand"
          to="/"
        >Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div
        class="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul class="nav navbar-nav">
          <router-link
            to="/portfolio"
            tag="li"
            activeClass="active"
          ><a>Portfolio</a></router-link>
          <router-link
            to="/stocks"
            tag="li"
            activeClass="active"
          ><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">EndDay</a></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >Save and Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li
                role="separator"
                class="divider"
              ></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>

        </ul>

      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters['portfolio/funds']
    }
  },
}


</script>

<style scoped>
</style>
