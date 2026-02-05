<template>
  <div class="formulario">
    <label for="id">Id</label>
    <input id="id" v-model="id" type="number" />

    <label for="id_nombre">Nombre</label>
    <input id="id_nombre" v-model="estudiante.nombre" type="text" />
    <label for="id_apellido">Apellido</label>
    <input id="id_apellido" v-model="estudiante.apellido" type="text" />
    <label for="id_fecha">Fecha de Nacimiento</label>
    <input id="id_fecha" v-model="estudiante.fechaNacimiento" type="date" />
    <label for="id_genero">Genero</label>
    <input id="id_genero" v-model="estudiante.genero" type="text" />
    <label for="id_provincia">Provincia</label>
    <input id="id_provincia" v-model="estudiante.provincia" type="text" />
  </div>
  <button @:click="actualizarParcial(id, estudiante)">Actualizar</button>
</template>

<script>
import { actualizarParcialFachada } from "../clients/Matriculaclient.js";

export default {
  data() {
    return {
      id: 0,
      estudiante: {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "",
        provincia: "",
      },
    };
  },
  methods: {
    actualizarParcial(id, estudiante) {
      actualizarParcialFachada(id, estudiante);
    },
  },
};
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