<template>
  <div>
    <b>this is a userDetail Component</b>
    <p>username is : {{ switchName() }}</p>
    <p>userage is : {{ userAge }} </p>
    <button @click="resetName">Reset name</button>
    <button @click="resetFn">Reset Name</button>
  </div>
</template>
<script>

import { eventBus } from '../main'
export default {
  props: {
    myName:{
      type: String
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName () {
      return this.myName.split("").reverse().join("");
    },
    resetName () {
      this.myName = 'Max';
        this.$emit('namewasreset', this.myName);
    }
  },
  created () {
    eventBus.$on('agewasedited',(age) => {
      this.userAge = age;
    });
  }
}
</script>

<style scoped>
  div {
    background-color: pink;
  }
</style>
