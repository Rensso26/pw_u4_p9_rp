import axios from "axios";

const URL = "http://localhost:3456/matricula/api/v1.0/estudiantes";

const consultarTodos = async () => {
    const data = await axios.get(URL).then(r => r.data);
    console.log(data)
    return data
};


const consultarPorId = async (id) =>{
    const data = await axios.get(URL+`/${id}`).then(r => r.data);
    console.log(data)
    return data

}

const guardar = async (body) => {
    axios.post(URL, body).then(r => r.data);
    console.log(body)
    return body
}

const actualizar = async (id, body) => {
    axios.put(URL + `/${id}`, body).then(r => r.data);
    console.log(body)
    return body
}

const actualizarParcial = async (id, body) => {
    axios.patch(URL + `/${id}`, body).then(r => r.data);
    console.log(body)
    return body
}


const borrar = async (id) => {
    axios.delete(URL + `/${id}`).then(r => r.data);
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

