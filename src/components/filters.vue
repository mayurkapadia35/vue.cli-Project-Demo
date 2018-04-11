<template>
  <div>
    <h1>this is a filter vue component</h1>
    <h1>Filters</h1>
    <p>{{ text | toUppercase | to-lowercase }}</p>
    <input v-model="filterText"/>
    <ul>
      <li v-for="f in filteredfruits">{{f}}</li>
    </ul>
    <app-list></app-list>
  </div>
</template>

<script>

  import list from './list'
  import {fruitmixin} from "../fruitmixin";

  export default {
    mixins: [fruitmixin],
    data() {
      return {
        text: "Hello mayur",
        // fruits: ['Apple','Banana','Mango','Melon'],
        // filterText: ''
      }
    },
    filters:{
      toUppercase (value){
        return value.toUpperCase();
      }
    },
    components:{
      'app-list': list
    }
  }
</script>

<style scoped>

</style>
