import { createStore } from 'vuex'

export default createStore({
    state:{
        productos:[]
    },
    mutations:{
        /*
        *   para modificar el state
        */
       setProductos(state,payload){
           state.producto = payload
       }
    },
    actions:{
        async fetchData({commit}){
            try{
                const res = await fetch('api.json')
                const data = await res.json
                commit('setProductos',data)
            }catch (error){
                console.log(error)
            }
        }
    },
    modules:{

    }
})