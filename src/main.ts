// Ejercicio 1: Definir una Interfaz para un Personaje. Objetivo: Crea una interfaz para un personaje de videojuego que incluya propiedades para el nombre, puntos de vida(HP), habilidades(como un arreglo de strings) y el pueblo natal(opcional).

interface personaje_videoj {
  nombre: string,
  hp: number,
  habilidades: string[];
  lugar_n: string,
};

let heroe: personaje_videoj = {
  nombre: "The Kosmos",
  hp: 500,
  habilidades: ["Curacion", "Fuerza", "Invulnerabilidad", "Vuelo"],
  lugar_n: "RD"
};

console.log(heroe);

//Ejercicio 1: Definir una Interfaz para un Personaje. Objetivo: Crea una interfaz para un personaje de videojuego que incluya propiedades para el nombre, puntos de vida(HP), habilidades(como un arreglo de strings) y el pueblo natal(opcional).

interface libro {
  titulo: "Clean Code";
  fecha_p: " 1 de agosto de 2008";
  autor: {
    nombre: "Robert C.Martin";
    nacionalidad: "Estadounidense";
  }
}

//Ejercicio 3: Interfaz para Arrays de Objetos. Objetivo: Utiliza interfaces para crear un arreglo de objetos que representen empleados, cada uno con un nombre, ID y departamento.

interface empleado {
  nombre: string;
  id: number;
  departamento: string;
}
let empleados: empleado[] = [
  { nombre: "Cosme", id: 1, departamento: "Tecnología" },
  { nombre: "Edgardo", id: 2, departamento: "Ventas" },
  { nombre: "Claudia", id: 3, departamento: "RRHH" }
];

console.log(empleados)

//Ejercicio 4: Extender Interfaces. Objetivo: Crea una interfaz PersonajeExtendido que extienda de la interfaz Personaje del Ejercicio 1, agregando una nueva propiedad para la experiencia(xp).

interface personaje_videoj_extendido extends personaje_videoj {
  xp: number;
}

let heroe2: personaje_videoj_extendido = {
  nombre: "The Kosmos",
  hp: 500,
  habilidades: ["Curacion", "Fuerza", "Invulnerabilidad", "Vuelo"],
  lugar_n: "RD",
  xp: 1000,
};

console.log(heroe2);

//Ejercicio 5: Interfaz con Métodos. Objetivo: Define una interfaz para un objeto "CuentaBancaria" que incluya propiedades para el saldo y un método para depositar dinero en la cuenta.

interface cuenta_de_banco {
  cuenta_no: number;
  saldo: number;
  deposito(cantidad: number): void;
}


let cuenta_bancaria: cuenta_de_banco = {
  cuenta_no: 1245788,
  saldo: 6000,
  deposito(total: number): void {
    this.saldo += total
    console.log("Se han depositado ${total} en la cuenta, su aldo es: ${this.saldo}");
  }

};

let saldo: number;
let deposito: number;

function suma(a: number, b: number): number {
  return a + b;
}


console.log((cuenta_bancaria), (suma));