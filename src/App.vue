<template>
  <div id="app">
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav" >
        <b-nav card-header tabs>
          <b-nav-item to="/" exact exact-active-class="active">Anasayfa</b-nav-item>
          <b-nav-item to="/new" exact exact-active-class="active">New</b-nav-item>
          <b-nav-item to="/hello" exact exact-active-class="active">Hello</b-nav-item>
          <b-nav-item to="/card" exact exact-active-class="active">Card</b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body>
        <router-view></router-view>
      </b-card-body>
    </b-card>
    <div class="container"  v-if="this.$router.currentRoute.path == '/' ">
      <Products />
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products";
export default {
  name: 'App',
  components:{
    Products
  },
  mounted() {
    // console.log(this.$router.currentRoute)
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
