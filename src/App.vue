<template>
  <div id="app">
      <app-counter></app-counter>
      <app-result ></app-result>
      <app-anotherresult></app-anotherresult>
      <app-anothercounter></app-anothercounter>
      <br/>
    value:  {{value}}
      
      <input type="text" v-model="value"/>
  </div>
</template>

<script>
import counter from './component/counter';
import result from './component/result';
import anotherresult from './component/anotherresult'
import anothercounter from './component/anothercounter'
export default {
  data(){
      return {
       
      }
  },
 
  components:{
    appCounter:counter,
    appResult:result,
    'app-anotherresult':anotherresult,
    'app-anothercounter':anothercounter
  },
  computed:{
    //双向数据绑定
    value:{
      get(){
        return this.$store.getters.value;
      },
      set(value){
        this.$store.dispatch('updatavalue',value)
      }
    }
  }
}
</script>

<style >

</style>
