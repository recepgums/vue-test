<template>
  <div class="hello">

    <input type="text" v-model="newInput" >
    <button @click="emitNew">Collect</button>
    <p>
      this is new one
    </p>
    <br>
    <input type="text" v-model="textBoxNew">
    {{ this.customTextBoxNew }} - {{ firstGetter }} <br>

    burası component state i {{ textBoxNew }}
    <hr>
    <span :class="[isActive ? 'text-success' : 'text-danger']">
        <p>burada yeni bir şey deniyorum</p>
          <b-button :class="'btn btn-'+[!isActive ? 'success' : 'danger' ]" @click="changeTextColor">
            change text to button's color
          </b-button>
      </span>
    <br>
    amaç $store kullanmak-
    <b>{{ doneTodosCount }}</b>
    <hr>
    <ul class="text-center">
      <li class="text-center" v-for="item in myObject" :key="item.name">
        {{ item.name }} - {{ item.email }}
      </li>
    </ul>
    <input @keyup.enter="addToObject" type="text" v-model="newObjectElement">
    <button class="btn btn-info" @click="addToObject"> Ekle</button>
    <hr>
    Parent Component <br>
    <Child :test="myObject"/>

    <hr>
    <div class="container" align="left">
      <h3>Emit example</h3>
      <br>
      <input type="text" >
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Child from './Child'


export default {
  name: 'New',
  components: {
    Child
  },
  props:['helloInput'],
  data() {
    return {
      textBoxNew: "aaaaaaaa",
      customTextBoxNew: '',
      isActive: true,
      myObject: [
        {name: 'recep', email: 'recep@recep.com'},
        {name: 'ahmer', email: 'ahmer@ahmer.com'},
        {name: 'test', email: 'test@test.com'},
        {name: 'rece232p', email: 'rec321321ep@rece32p.com'},
      ],
      newObjectElement: '',
      newInput:''
    }
  },
  mounted() {
    this.textBoxNew = this.firstGetter
  },
  computed: {
    ...mapGetters(['firstGetter']),
    doneTodosCount() {
      return this.$store.getters.secondGetter
    }

  },

  methods: {
    changeTextColor() {
      this.isActive = !this.isActive
    },
    addToObject() {
      this.myObject.push({
        name: this.newObjectElement,
        email: this.newObjectElement + '@' + this.newObjectElement + '.com'
      });
      this.newObjectElement = ''
    },
    emitNew(){
    this.$emit('emitNew',this.helloInput+" "+this.newInput)
    }
  },
}
</script>