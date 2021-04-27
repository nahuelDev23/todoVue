<template>
  <h1>lista</h1>
  <ul>
      <todo-item v-for="todo in todos" :key="todo.id" :todo='todo'/>
      <li v-if="todos.length === 0">no hay elementos</li>
      <todo-footer
      v-if="todos.length !== 0"
      />

      <todo-filtro/>
  </ul>
</template>

<script>
import { inject, provide ,ref,computed} from '@vue/runtime-core'
import TodoItem from './TodoItem.vue'
import TodoFooter from './TodoFooter.vue'
import TodoFiltro from './TodoFiltro.vue'
export default {
  components: { TodoItem ,TodoFooter, TodoFiltro},
 setup(){
         const todosTodos = inject('todos')
        const estado = ref('all')

        const todos = computed(()=>{
            if(estado.value === 'all'){
                return todosTodos.value
            }

            if(estado.value === 'active'){
                return todosTodos.value.filter(item => item.estado === false)
            }

             if(estado.value === 'complete'){
                return todosTodos.value.filter(item => item.estado === true)
            }
            
        })
      provide('estado',estado)

        return {todos}
    }
}
</script>

<style>

</style>