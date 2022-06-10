//1. Para hacer la consulta asíncrona del archivo json:

let personajes = ( () => {
    const url = `${baseurl}/dbz.json`; //levantar según el puerto
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    return {getData}; //con esto se retorna dentro de un objeto el método getData
} )();

export default personajes;