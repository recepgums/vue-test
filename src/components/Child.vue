<template>
  <div class="container ">
    <p>This is child component. Here you can add new user to parent component</p>
    <div class="row text-center">
      <div class="col-4 ml-5">
        <input class="form-control" type="text" @keyup.enter="emitToParent" v-model="newElementInput">
      </div>
      <div class="col-1 ml-2">
        {{test.length}}
      </div>
      <div class="col-6">
        <button class="btn btn-outline-info ml-3" @click="emitToParent">Send to parent component</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ['test'],
  mounted() {
    this.assignmetnTry()
  },
  data() {
    return {
      initValue: '',
      newElementInput: '',
    }
  },
  methods: {
    assignmetnTry() {
      this.initValue = this.test
    },
    emitToParent() {
     if (this.newElementInput!==''){
       this.$emit('emitToParent', {name:this.newElementInput,email:this.newElementInput+'@'+this.newElementInput})
     }
     this.newElementInput=''
    }

  },
}
</script>
