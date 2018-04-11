<template>
  <div class="container">
    <form>
      <table align="center">
        <tr>
          <td>Username:</td>
          <td><input type="text" class="form-control" v-model="user.username"/></td>
        </tr>
        <tr>
          <td>Email:</td>
          <td><input type="email" class="form-control" v-model="user.email"/></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button class="btn btn-outline-primary" @click.prevent="save">Save</button>
            <button class="btn btn-outline-warning" @click.prevent="fetch">Get</button>

          </td>
        </tr>
        <tr>
          <td><input type="text" class="form-control" v-model="node"/></td>
        </tr>

      </table>
      <ul class="list-group">
        <li class="list-group-item" v-for="u in getAllUser">{{u.username}}--{{u.email}}</li>
      </ul>
    </form>
    <p v-text="'hello this is p tag'">.... append this tag</p>
    <p v-html="'<strong>this si a strong text...</strong>'"></p>
    <p v-highlight.delayed="'green'">Custom directives is here</p>
    <p v-local-highlight.delayed.blink="{mainColor: 'green',secondColor:'red',delay: 500}">Custom directives is here, too</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: '',
        },
        getAllUser: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      save() {
        //console.log(this.user);
        // this.$http.post('',this.user)
        //   .then(res=>{
        //     console.log(res);
        //   },error=>{
        //     console.log(error);
        //   });
        // this.resource.save({},this.user);
        this.resource.saveAlt(this.user);
      },
      fetch() {
        //   this.$http.get('data.json')
        //     .then(res=>{
        //       return res.json();
        //     })
        //     .then(data=>{
        //       const resultarray=[];
        //       for(let key in data){
        //         resultarray.push(data[key]);
        //       }
        //       this.getAllUser=resultarray;
        //     });
        this.resource.getData({node: this.node})
          .then(res => {
            return res.json();
          })
          .then(data => {
            const resultarray = [];
            for (let key in data) {
              resultarray.push(data[key]);
            }
            this.getAllUser = resultarray;
          });
      }
    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET'}
      }
      this.resource = this.$resource('{node}.json', {}, customActions);

    },
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          let delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 3000;
          }

          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;

            setTimeout(() => {
              setInterval(() => {
                currentColor==secondColor?currentColor=mainColor:currentColor=secondColor;
                if (binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay)
          } else {
            setTimeout(() => {
              if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        }
      }
    }
  }
</script>



<style scoped>

</style>
