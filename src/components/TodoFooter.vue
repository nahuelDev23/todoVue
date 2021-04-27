<template>
    <li class="flex justify-between">
     <button>{{contarActivos}} Activos</button>
     <button @click="eliminarCompletados">Elimiar completados</button>
  </li>
</template>

<script>
import { computed, inject } from '@vue/runtime-core'
export default {
    name:"TodoFooter",
    setup(){
        const todos = inject('todos')
        const contarActivos = computed(()=>{
            return todos.value.filter(item => item.estado === false).length
        })

        const eliminarCompletados = () => {
            return todos.value = todos.value.filter(item => item.estado === false)
        }
        return {contarActivos,eliminarCompletados}
    }
}
</script>

<style>

</style>