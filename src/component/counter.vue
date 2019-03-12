<template>
    <div>
        counter component
        <br/>
        <button @click="increment(50)">increment</button>
        <button @click="decrement(10)">decrement</button>
        <button @click="asyncinrement({by:40,duration:500})">asyncincrement</button>
        <button @click="asyncdecrement({by:500,duration:1000})">asyncdecrement</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:{
       ...mapActions(['increment','decrement','asyncinrement','asyncdecrement'])
    }
}
</script>
