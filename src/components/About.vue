<template>
  <button @click="consultarTodos()">obtener todos</button>

  <table>
    <tr>
      <th>id</th>
      <th>nombre</th>
      <th>apellido</th>
      <th>fechaNacimiento</th>
      <th>genero</th>
      <th>provincia</th>
    </tr>
    <tr v-for="estudiante in estudiantes" :key="estudiante.id">
      <td>{{ estudiante.id }}</td>
      <td>{{ estudiante.nombre }}</td>
      <td>{{ estudiante.apellido }}</td>
      <td>{{ estudiante.fechaNacimiento }}</td>
      <td>{{ estudiante.genero }}</td>
      <td>{{ estudiante.provincia }}</td>
    </tr>
  </table>
</template>

<script>
import {
  consultarTodosFachada,
  consultarPorIdFachada,
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarfachada,
} from "../clients/Matriculaclient.js";
export default {
  data() {
    return {
      estudiantes: {},
      estudiante: {},
      id: 0,
    };
  },

  methods: {
    async consultarTodos() {
      this.estudiantes = await consultarTodosFachada();
    },
    async consultarPorId(id) {
      return await consultarPorIdFachada(id);
    },
    async guardar() {
      await guardarFachada();
    },
    async actualizar() {
      await actualizarFachada();
    },
    async actualizarParcial() {
      await actualizarParcialFachada();
    },

    async borrarfachada() {
      await borrarfachada();
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

/* Estilo para la tabla de resultados */
table {
  width: 100%;
  margin-top: 25px;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>