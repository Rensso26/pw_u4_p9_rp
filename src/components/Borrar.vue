<template>
    <div class="formulario">
    <label for="id">Id</label>
    <input  id="id" v-model="id" type="number">
    </div>
  <button @click="borrar(id)">Borrar</button>
</template>

<script>
import { borrarfachada} from '../clients/Matriculaclient.js';

export default {
    data() {
        return {
            id: 0
        }
    },
    methods: {
        async borrar(id) {
            return await borrarfachada(id);
        }
    }

}
</script>


<style scoped>
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 250px;
  gap: 5px;
  margin-bottom: 20px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #35495e;
}
</style>