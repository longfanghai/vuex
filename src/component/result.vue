<template>
    <div>
       <div>resulr</div>
       <br/>
       counter:{{counter}}
    </div>
</template>
<script>
export default {
    computed:{
        counter(){
             return this.$store.getters.doublecouter;
        }
    }
}
</script>

