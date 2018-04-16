<template>
  <div>
    <b>this is a userDetail Component</b>
    <p>username is : {{ switchName() }}</p>
    <button @click="resetName">Reset name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName:{
      type: String
    }
  },
  methods: {
    switchName () {
      return this.myName.split("").reverse().join("");
    },
    resetName () {
      this.myName = 'Max';
        this.$emit('namewasreset', this.myName);
    }
  }
}
</script>

<style scoped>
  div {
    background-color: pink;
  }
</style>
