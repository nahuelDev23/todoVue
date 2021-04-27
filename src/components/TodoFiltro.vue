<template>
  <button @click="filtrar('all')">all</button>
  <button @click="filtrar('active')">actives</button>
  <button @click="filtrar('complete')" >complete</button>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
    name:"TodoFiltro",
    setup(){
       
        const estado = inject('estado')
        const filtrar = (valor) =>{
            estado.value = valor;
        }
        return {filtrar}
    }
}
</script>

<style>

</style>