class Personaje {
    constructor(nombre, img, poder, raza) {
        //a través de closures y encapsulamiento
        let Nombre = nombre
        let Img = img
        let Poder = poder
        let Raza = raza
        //Todas estas variables tendrían que retornarse a través de un getter:
        this.getNombre = () => Nombre;
        this.getImg = () => Img;
        this.getPoder = () => Poder;
        this.getRaza = () => Raza;
        //método setter
        this.setPoder = (poder) => (Poder = poder);
    }
    //creación de los métodos:
    get Nombre(){
        return this.getNombre();
    }
    get Img(){
        return this.getImg();
    }
    get Poder(){
        return this.getPoder();
    }
    get Raza(){
        return this.getRaza();
    }
    set Poder(poder){
        //retorna la ejecución de getPoder, pasando como argumento el parámetro poder:
        return this.getPoder(poder);
    }

}

export default Personaje;