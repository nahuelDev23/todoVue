<template>
  <form @submit.prevent="formulario">
    <input type="text" placeholder="Hacer" v-model.trim="texto"/>
  </form>
</template>

<script>
import { inject, ref } from "@vue/runtime-core";
export default {
  name: "TodoForm",
  setup() {
    const todos = inject("todos");
    const texto = ref('');
    const formulario = () => {
        if(texto.value == ''){
            console.log('esta vacio')
            return
        }
        const todo = {
            texto:texto.value,
            estado: false,
            id:Date.now()
        }
        texto.value = ''
        todos.value.push(todo)

    }

    return {formulario,texto}
  },
};
</script>

