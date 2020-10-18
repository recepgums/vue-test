<template>
  <div class="container bg-light py-3">
    <div class="row">
      <div class="col-4 border-right">
        <input type="text" v-model="newInput">
        <button @click="emitNew">Collect</button>
        <p>
          this is new one
        </p>
      </div>
      <div class="col-4 border-right">
        <input type="text" v-model="textBoxNew">
        {{ this.customTextBoxNew }} - {{ firstGetter }} <br>
        burası component state i {{ textBoxNew }}
      </div>
      <div class="col-4 ">
    <span :class="[isActive ? 'text-success' : 'text-danger']">
        <p>burada yeni bir şey deniyorum</p>
          <b-button :class="'btn btn-'+[!isActive ? 'success' : 'danger' ]" @click="changeTextColor">
            change text to button's color
          </b-button>
      </span>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-4">
        amaç $store kullanmak <br>
        <b>{{ doneTodosCount }}</b>
      </div>
      <div class="col-4">
        <ul class="text-center">
          <li class="text-left" v-for="item in myObject" :key="item.name">
            {{ item.name }} - {{ item.email }}
          </li>
        </ul>
      </div>
      <div class="col-4">
        <input class="form-control" @keyup.enter="addToObject" type="text" v-model="newObjectElement">
        <button class="btn btn-info" @click="addToObject"> Ekle</button>
      </div>
    </div>

    <hr>
    <div class="text-center align-content-center align-items-center">
      Parent Component <br>
      <Child :test="myObject" @emitToParent="addNewElementByChild"/>
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
  props: ['helloInput'],
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
      newInput: ''
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
    emitNew() {
      this.$emit('emitNew', this.helloInput + " " + this.newInput)
      this.$swal('kelimler toplandı');
      this.newInput = ''
    },
    addNewElementByChild(newElem){
      this.myObject.push(newElem)
    }
  },
}
</script>