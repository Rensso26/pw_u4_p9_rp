import axios from "axios";
import {obtenertokenFachada} from "../clients/AuthorizationClient.js";

const URL = "http://localhost:3456/matricula/api/v1.0/estudiantes";
const auth = await obtenertokenFachada();
const token = auth.accessToken;



const consultarTodos = async () => {
    const data = await axios.get(URL, { headers: { Authorization: `Bearer ${token} ` } }).then(r => r.data);
    console.log(data)
    return data
};


const consultarPorId = async (id) => {
    const data = await axios.get(URL + `/${id}`,{ headers: { Authorization: `Bearer ${token} ` } }).then(r => r.data);
    console.log(data)
    return data

}

const guardar = async (body) => {
    const data = await axios.post(URL, body, { headers: { Authorization: `Bearer ${token} ` } }).then(r => r.data);
    console.log(data)
    return data
}

const actualizar = async (id, body) => {
    await axios.put(URL + `/${id}`, body,{ headers: { Authorization: `Bearer ${token} ` } }).then(r => r.data);
    console.log(body)
    return body
}

const actualizarParcial = async (id, body) => {
    await axios.patch(URL + `/${id}`, body,{ headers: { Authorization: `Bearer ${token} ` } }).then(r => r.data);
    console.log(body)
    return body
}


const borrar = async (id) => {
    await axios.delete(URL + `/${id}`,{ headers: { Authorization: `Bearer ${token} ` } }).then(r => r.data);
}



export async function consultarTodosFachada() {
    return await consultarTodos();
}

export async function consultarPorIdFachada(id) {
    return await consultarPorId(id);
}

export async function guardarFachada(body) {
    return await guardar(body);
}

export async function actualizarFachada(id, body) {
    return await actualizar(id, body);
}

export async function actualizarParcialFachada(id, body) {
    return await actualizarParcial(id, body);
}

export async function borrarfachada(id) {
    return await borrar(id);
}

