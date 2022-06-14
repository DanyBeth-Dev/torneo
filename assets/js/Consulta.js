let characters = ( () => {
    const url = "./assets/js/dbz.json"; //levantar según el puerto
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    return {getData};
} )();

export default characters;
