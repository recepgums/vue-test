<template>
  <div class="container">
    This is Card component <br>
    <b-list-group v-for="item in globalBasketGetter" :key="item.price">
      <b-list-group-item>{{ item.attributes.name.no }}</b-list-group-item>
    </b-list-group>
    <router-link class="btn btn-success small  mx-3" :to="{path: '/hello', params: {fromCard : test}}">Go to sou
    </router-link>
    <div class="list-group">
      <div v-for="(item) in jsonPlaceHolderGetter" :key="item.id" class="list-group-item">
        {{ item }}
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Card",
  computed: {
    ...mapGetters(['globalBasketGetter','jsonPlaceHolderGetter'])
  },
  data() {
    return {
      test: 'this param coming from card component'
    }
  },
  mounted() {
    this.first()
  },
  methods: {
    ...mapActions(['jsonPlaceHolderAxios']),
    first() {
      this.jsonPlaceHolderAxios()
    },
    goPayment() {
      this.$router.push({path: 'hello', params: {fromCard: this.test}})
    }
  }


}
</script>

<style scoped>

</style>