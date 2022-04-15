class Personaje {
  nombre;
  familia;
  edad;
  tipo;
  estado;
  serie;
  constructor(nombre, familia, edad, tipo) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.tipo = tipo;
    this.estado = "Vivo";
    this.serie = "Juego de Tronos";
  }

  comunicar() {
    let frase = "";
    switch (this.Tipo) {
      case "":
        frase = "";
        break;
      default:
        frase = "";
    }
    return frase;
  }

  morir() {
    this.estado = "muerto";
  }
}

const personajes = new Personaje("Tyrion Lannister");
console.log(personajes.nombre);
