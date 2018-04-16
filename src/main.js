import Vue from 'vue'
import App from './App'
import router from './router'
import Demo from './components/Demo'
import forms from './components/input_form'
import VueResource from 'vue-resource'
import httpDemo from './components/httpDemo'
import parent from './components/parent'
import userdetail from './components/userDetail'
import useredit from './components/userEdit'


// import BootstrapVue from '../node_modules/bootstrap-vue'
Vue.config.productionTip = false
Vue.use(VueResource);

Vue.directive('highlight',{
  bind(el,binding, vnode){
    // el.style.backgroundColor="skyblue";
    // el.style.backgroundColor=binding.value;
    let delay=0;
    if(binding.modifiers['delayed']){
      delay=3000;
    }
    setTimeout(()=>{
      if(binding.arg=='background'){
        el.style.backgroundColor=binding.value;
      }else{
        el.style.color=binding.value;
      }
    },delay);
  }
});

Vue.http.options.root='https://http-demo-34c16.firebaseio.com/';
Vue.http.interceptors.push((request,next)=>{

  console.log(request);
  if(request.method=="POST"){
    request.method='PUT';
  }
  next(response=>{
    response.json=()=>{return {messages: response.body} }
  });
});
Vue.component('app-servers', Demo)
Vue.component('form-controls',forms)
Vue.component('httpDemo',httpDemo)
Vue.component('parent',parent)
Vue.component('app-user-edit',useredit)
Vue.component('app-user-detail',userdetail)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
