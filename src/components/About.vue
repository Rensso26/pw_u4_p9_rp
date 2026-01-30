<template>
    <input v-model="id" type="number">
  <button @click="consultarPorId(id)">obtener por id</button>
  <button @click="consultarTodos()">obtener todos</button>
  <button @click="actualizarFachada">actualizar</button>
  <button @click="actualizarParcialFachada">actualizar parcial</button>
  <button @click="guardarFachada">guardar</button>
  <button @click="borrarfachada">eliminar</button>
    <p v-if="estudiantes">{{ estudiantes }}</p>
</template>

<script>
import {consultarTodosFachada, consultarPorIdFachada,
    guardarFachada,actualizarFachada, actualizarParcialFachada,
    borrarfachada} from '../clients/Matriculaclient.js';
export default {
    data() {
        return {
           estudiantes: {}, 
            estudiante: {},
            id: 0,
        }
    },

    methods: {
        async consultarTodos(){
           this.estudiantes = await consultarTodosFachada();
        },
        async consultarPorId(id){
            return await consultarPorIdFachada(id);
        },
        async guardar(){
            await guardarFachada();
        },
        async actualizar(){
            await actualizarFachada();
        },
        async actualizarParcial() {
            await actualizarParcialFachada();
        },

         async borrarfachada() {
             await borrarfachada();
         }
    }
}
</script>

<style>

</style>