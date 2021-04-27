<template>
  <h1>Todos</h1>
  <todo-form/>
  <todo-list/>
</template>

<script>
import { ref } from '@vue/reactivity'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { provide, watchEffect } from '@vue/runtime-core'
export default {
    components:{
        TodoForm,
        TodoList
    },
    setup(){
        const todos = ref([])

        if(localStorage.getItem('todos')){
            todos.value = JSON.parse(localStorage.getItem('todos'))
        }

        watchEffect(()=>{
            localStorage.setItem('todos',JSON.stringify(todos.value))
        })
        provide('todos',todos)

    }
}
</script>

<style>

</style>