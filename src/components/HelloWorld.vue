<template>
  <div class="container bg-light py-3">
    <div class="row">
      <div class="col-12">
        <b>Add on List </b><br>
        <input type="text" v-model="itemName" placeholder="Ürün adı">
        <input type="number" v-model="itemCost" placeholder="Ürün Fiyatı" class="ml-2">
        <button class="ml-2 btn btn-info" @click="addInList">Ekle</button>
        <hr>
      </div>
    </div>
    {{ collectedText }}
    <div class="container  d-flex">
         <div class=" col-6 mx-auto ">
           <ul class="list-group " v-for="fruit in fruits" @click="clickFruit(fruit)" :key="fruit.name">
             <li :class="[fruit.selected ? 'bg-success list-group-item' : 'bg-danger list-group-item ']">{{
                 fruit.name
               }}
             </li>
           </ul>
           <br>
           <h4>{{ total }}</h4>
         </div>
    </div>
    <div class="container">
<!--      @click="clickFruit(fruit)"-->
      <ul class="list-group " v-for="item in globalBasketGetter"  :key="item.attributes.name.no">
        <li class="list-group-item">{{
            item.attributes.name.no
          }}
          <button  @click="deleteFromBasket(item)" class="float-right btn-danger btn small  mx-5 justify-content-end">Delete</button>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    ...mapGetters(['globalBasketGetter'])
  },
  components: {},
  data() {
    return {
      fruits: [
        {name: 'elma', cost: 10, selected: false},
        {name: 'armut', cost: 23, selected: false},
        {name: 'kiraz', cost: 5, selected: false},
        {name: 'incir', cost: 32, selected: false},
      ],
      total: 0,
      propsVar: 'a',
      itemName: '',
      itemCost: '',
      collectedText: ''
    }
  },
  created() {
  },
  methods: {
    clickFruit(fruit) {
      if (fruit.selected) {
        this.total -= fruit.cost
        fruit.selected = !fruit.selected
      } else {
        this.total += fruit.cost
        fruit.selected = !fruit.selected
      }
    },
    handleEmit(comes) {
      alert(comes)
    },
    addInList() {
      if (this.itemCost !== '' && this.itemName !== '') {
        this.fruits.push({
          name: this.itemName,
          cost: this.itemCost * 1,
          selected: false
        })
      }
    },
    deleteFromBasket(){

    }
  },
}
</script>
