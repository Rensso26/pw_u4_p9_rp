<template>
    <label for="id">Id</label>
    <input  id="id" v-model="id" type="number">
  <button @click="consultarPorId(id)">obtener por id</button>
</template>

<script>
import { consultarPorIdFachada} from '../clients/Matriculaclient.js';

export default {
    data() {
        return {
            id: 0
        }
    },
    methods: {
        async consultarPorId(id) {
            return await consultarPorIdFachada(id);
        }
    }

}
</script>

<style>

</style>