<template>
    <div>
        counter component
        <br/>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    methods:{
       /*  increment(){
            //commit提交到store里的increment
          this.$store.commit('increment')
        },
        decrement(){
         //   this.$emit('updated',-1)
         this.$store.state.counter--
        } */

        ...mapMutations(['increment','decrement'])
    }
}
</script>
