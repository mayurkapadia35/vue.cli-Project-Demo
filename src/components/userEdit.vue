<template>
  <div>
    <b>this is a userEdit Component</b>
    <p>user age is {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>

  import { eventBus } from '../main'

export default {
  props: ['userAge'],
  methods: {
    editAge () {
      this.userAge = 30
      // this.$emit('agewasedited', this.userAge)
      // eventBus.$emit('agewasedited', this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>

<style scoped>
  div {
    background-color: darkcyan;
  }
</style>
