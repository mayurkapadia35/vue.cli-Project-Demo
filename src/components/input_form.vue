<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<!--<link rel="stylesheet" href="../../node_modules/bootstrap-vue/dist/bootstrap-vue.css">-->
<template>
  <div class="container">
    <form>

      <table align="center">
        <tr>
          <td><label for="email">Email Address:</label></td>
          <td><input type="email" class="form-control" id="email" v-model="userData.email"></td>
        </tr>
        <tr>
          <td><label for='password'>Password:</label></td>
          <td><input type="password" class="form-control" id="password" v-model="userData.password"></td>
        </tr>
        <tr>
          <td><label for="age">Age:</label></td>
          <td><input type="number" class="form-control" id="age" v-model="userData.age"/></td>
        </tr>
        <tr>
          <td><label for="address">Address:</label></td>
          <td><textarea class="form-control" id="address" v-model="userData.address"></textarea></td>
        </tr>
        <tr>
          <td>Hobby:</td>
          <td><label for="cricket">
            <input type="checkbox" id="cricket" v-model="userData.hobby" value="Cricket"/>Cricket
          </label>
            <label for="foody">
              <input type="checkbox" id="foody" v-model="userData.hobby" value="Foody"/>Foody
            </label>
          </td>
        </tr>

        <tr>
          <td>Gender:</td>
          <td><label for="male">
            <input type="radio" id="male" checked="true" v-model="userData.gender" value="Male"/>Male
          </label>
            <label for="female">
              <input type="radio" id="female" v-model="userData.gender" value="Female"/>Foody
            </label>
          </td>
        </tr>

        <tr>
          <td><label for='city'>City:</label></td>
          <td>
            <select id="city" class="form-control" v-model="userData.city">
            <!--<option value="">&#45;&#45; Select City &#45;&#45;</option>-->
            <option v-for="value in cityData" :value=value>{{value}}</option>
          </select></td>
        </tr>

        <tr>
          <td></td>
          <td><button class="btn btn-outline-primary" id="btnSave"
              @click.prevent="submitted">Save</button>
            <input type="reset" class="btn btn-outline-warning" id="btnReset" value="Reset"></td>
        </tr>
      </table>
    </form>

    <div v-if="userData.issubmitted">
      <p>Email is : {{userData.email}}</p>
      <p>password is : {{userData.password}}</p>
      <p>Age is : {{userData.age}}</p>
      <p style="white-space: pre">Address is : {{userData.address}}</p>
      <ul>
        <li v-for="item in userData.hobby">{{item}}</li>
      </ul>
      <p>Gender is : {{userData.gender}}</p>
      <p>City is : {{userData.city}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: 27,
          address: '',
          hobby: [],
          gender: '',
          city: 'Surat',
          issubmitted: false
        },
        cityData: ['Surat', 'Navsari', 'Bharuch', 'Baroda'],
      }
    },
    methods:{
      submitted (){
        this.userData.issubmitted =true;
      }
    }
  }
</script>

<style scoped>

</style>
