import axios from "axios";

const URL = " http://localhost:8082/matricula/api/v1.0/auth";

const usuario = "admin";
const password = "admin";


const obtenertoken = async () => {
    const data = await axios.get(URL + `/token?user=${usuario}&password=${password}`).then(r => r.data);
    return data
}

const obtenertokenlogin = async (us, ps) => {
    const data = await axios.get(URL + `/token?user=${us}&password=${ps}`).then(r => r.data);
    return data
}

export async function obtenertokenFachada() {
    const data = await obtenertoken();
    return data
} 

export async function obtenertokenloginFachada(us, ps) {
    const data = await obtenertokenlogin(us, ps);
    return data
}