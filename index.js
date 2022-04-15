/* eslint-disable max-classes-per-file */
class Personaje {
  nombre;
  familia;
  edad;
  estado;
  serie;
  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
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
class Rey extends Personaje {
  constructor(nombre, familia, edad) {
    super(nombre, familia, edad);
    this.Anos_Reinad = "";
  }
}
const personajes = new Personaje("Tyrion Lannister", "familia", "edad");
const reyes = new Personaje.Rey("Tyrion Lannister", "familia", "edad");

console.table(personajes);
console.table(reyes);
