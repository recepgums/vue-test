<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <hr>
    <p>Burası new componentına emit yaptığımız yer</p><br>
    <input type="text" v-model="helloInput" >
    <New :helloInput="helloInput" @emitNew="emitForNew" />
    {{collectedText}}
    <hr>
    <div class="col-6 ">
      <ul class="list-group" v-for="fruit in fruits" @click="clickFruit(fruit)" :key="fruit.name">
        <li :class="[fruit.selected ? 'bg-success list-group-item' : 'bg-danger list-group-item']">{{fruit.name}}</li>
      </ul>
      <br>
      <h4>{{total}}</h4>
    </div>
    <br>
    <input  type="text" v-model="propsVar" ><br>
    {{propsVar}}
    <Child :test="propsVar" @emitToParent="handleEmit"/>
  </div>
</template>
<script>
import Child from "@/components/Child";
import New from "@/components/New";
export default {
  name: 'HelloWorld',
  components:{
    Child,New
  },
  data(){
    return{
      fruits:[
        {name:'elma',cost:10,selected:false},
        {name:'armut',cost:23,selected:false},
        {name:'kiraz',cost:5,selected:false},
        {name:'incir',cost:32,selected:false},
      ],
      total:0,
      propsVar: 'a',
      helloInput:'',
      collectedText:''
    }
  },
  methods:{
    clickFruit(fruit){
      if (fruit.selected){
        this.total-=fruit.cost
        fruit.selected=!fruit.selected
      }else{
        this.total+=fruit.cost
        fruit.selected=!fruit.selected
      }
    },
    handleEmit(comes){
      alert(comes)
    },
    emitForNew(elem){
      this.collectedText = elem
    }
  },
  props: {
    msg: String
  }
}
</script>
