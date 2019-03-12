import Vue from 'vue';
import Vuex from'vuex';
//import counter from './store/modules/counter'
Vue.use(Vuex);
//创建一个仓库 Vue.Store()
export const store=new Vuex.Store({
    //state只负责设置状态
    state:{
        counter:0,
        value:0
    },
    //获取状态getters
    getters:{
        doublecouter:state=>{
            return state.counter;
        },
        value:state=>{
            return state.value
        }
    },
    //修改数据
    mutations:{
        increment:(state,payload)=>{
            console.log('mutation increment')
           return  state.counter+=payload;
        },
        decrement:(state,payload)=>{
            console.log('mutation decrement')
            return  state.counter-=payload;
        },
        updatavalue:(state,payload)=>{
           state.value=payload
        }
    },
    actions:{
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
        updatavalue:({commit},payload)=>{
            console.log('action updata')
               commit('updatavalue',payload)
        }
    },
    //引入模块
    /* modules:{
        counter
    } */
})