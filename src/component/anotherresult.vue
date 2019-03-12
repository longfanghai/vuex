<template>
    <div>
       <div>resulr</div>
       <br/>
       anothercounter:{{doublecouter}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
       ...mapGetters(['doublecouter'])
    }
}
</script>

