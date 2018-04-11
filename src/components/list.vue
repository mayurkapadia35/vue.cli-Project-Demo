<template>
  <div>
    <h1>MixinsExample</h1>
    <input v-model="filterText"/>
    <ul>
      <li v-for="f in filteredfruits">{{f}}</li>
    </ul>
  </div>
</template>

<script>
  import {fruitmixin} from '../fruitmixin'

  export default {
    mixins: [fruitmixin],
    created (){
      console.log('Inside list created hook');
    }
  }
</script>

<style scoped>

</style>
