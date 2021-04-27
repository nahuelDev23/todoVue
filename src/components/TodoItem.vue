<template>
  <li class="flex justify-between">
      <span @click="completado(todo.id)" :class="{'tachado':todo.estado}">{{todo.texto}}</span>
      <span @click="eliminar(todo.id)">X</span>
  </li>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
   props:{
       todo:{
           type:Object,
           required:true
       }
   },
   setup(){
       const todos = inject('todos')

       const eliminar = id => {
           todos.value = todos.value.filter(item => item.id !== id)
       }

       const completado = id => {
           todos.value = todos.value.map(item => {
               if(item.id === id){
                   item.estado = !item.estado
               }
               return item
           })
       }
       return {eliminar,completado}
   }
}
</script>

<style>
.tachado{
    text-decoration: line-through;
}
</style>