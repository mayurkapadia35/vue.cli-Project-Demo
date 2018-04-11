<template>
  <div>
    <h1>server Status is {{status}}</h1>
    <hr>
    <button @click="changeStatus()">Change</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>
<style scoped>
  div{
    border: 10px solid red;
  }
</style>
