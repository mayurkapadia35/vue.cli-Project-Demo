<template>
  <div class="component">
    <b>this is a parent Component...</b>
    <p>i am a boss</p>
    <p>USername is: {{name}}</p>
    <p>age is : {{age}}</p>
    <button @click = "changeName">Change my name</button>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="name" :userAge="age" @namewasreset = "name = $event" :resetFn="resetName"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @agewasedited = "age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>

import userDetail from './userDetail'
import userEdit from './userEdit'

export default {
  data () {
    return {
      name: 'Max',
      age: 27
    }
    // name: 'Max'
  },
  methods: {
    changeName () {
      this.name = 'Anna'
    },
    resetName () {
      this.name = 'Max'
    },
  },
  components: {
    appuserDetail: userDetail,
    appuserEdit: userEdit,
  }
}
</script>

<style scoped>
  div {
    background-color: lightblue;
    display: block;
    height: 50%
  }
</style>
