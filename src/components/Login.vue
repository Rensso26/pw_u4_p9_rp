<template>
  <div class="login">
    <h1>Login</h1>
    <label for="">Usuario</label>
    <input v-model="usuario" type="text" placeholder="Usuario" />
    <label for="">Contraseña</label>
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @:click="login(usuario, password)">Entrar</button>

    <h1 v-if="mensaje">{{ mensaje }}</h1>
  </div>
</template>

<script>
import {
  obtenertokenFachada,
  obtenertokenloginFachada,
} from "../clients/AuthorizationClient.js";
export default {
  data() {
    return {
      usuario: "",
      password: "",
      mensaje: null,
    };
  },
  methods: {
    async login(us, ps) {
      const auth = await obtenertokenloginFachada(us, ps);
      const token = auth.accessToken;
      console.log(token);
      if (token) {
        if (token !== null) {
          localStorage.setItem("token", token);
          localStorage.setItem("estaAutenticado", true);
        } else {
          this.mensaje = "Error de autenticación";
        }
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

input {
  width: 80%;
  margin-bottom: 10px;
  padding: 8px;
}

button {
  width: 60%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>