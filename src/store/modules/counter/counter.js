const state={
    counter:0
}

const getters= {
    doublecouter:state=>{
        return state.counter;
    },
}

const mutations={
    increment:(state,payload)=>{
        console.log('mutation increment')
         state.counter+=payload;
    },
    decrement:(state,payload)=>{
        console.log('mutation decrement')
         state.counter-=payload;
    },
}

const actions={
    increment:({commit},payload)=>{
        console.log('action incremnt')
        commit('increment',payload)
    },
    decrement:({commit},payload)=>{
        console.log('action decrement')
        commit('decrement',payload)
    },
    asyncinrement:({commit},data)=>{
        console.log(data)
        setTimeout(() => {
            commit('increment',data.by)
        }, data.duration);
    },
    asyncdecrement:({commit})=>{
        setTimeout(() => {
            commit('decrement')
        }, 1000);
    },
}

export default {state,getters,mutations,actions}