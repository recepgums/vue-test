<template>
  <div>
    This is child component {{ test }}
    <button @click = "emitToParent">Send to parent component</button>
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
      initValue: ''
    }
  },
  methods: {
    assignmetnTry() {
      this.initValue = this.test
    },
    emitToParent(){
    this.initValue = this.test + " yazıldı";
    this.$emit('emitToParent',this.initValue)
    }
  },


}

</script>

<style scoped>

</style>