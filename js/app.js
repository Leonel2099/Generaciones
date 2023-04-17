const formulario = document.querySelector("form");
formulario.addEventListener("submit", crearObjeto);

class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  get dni() {
    return this.#dni;
  }
  set dni(nuevoDni) {
    this.#dni = nuevoDni;
  }
  get sexo() {
    return this.#sexo;
  }
  set sexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }
  get peso() {
    return this.#peso;
  }
  set peso(nuevPeso) {
    this.#peso = nuevPeso;
  }
  get altura() {
    return this.#altura;
  }
  set altura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }
  get anioNacimiento() {
    return this.#anioNacimiento;
  }
  set anioNacimiento(nuevoAnioNacimiento) {
    this.#anioNacimiento = nuevoAnioNacimiento;
  }

  mostrarGeneracion() {
    let alert = document.getElementById("alert");
    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      alert.className = "alert alert-dark";
      alert.innerHTML = `Pertenece a la generazion Z <br>
      Su rasgo caracteristico es : Irreverencia <br>`;
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      alert.className = "alert alert-dark";
      alert.innerHTML = `Pertenece a la generazion Y millennials <br>Su rasgo caracteristico es : Frustacion`;
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      alert.className = " alert alert-dark";
      alert.innerHTML = `Pertenece a la generazion XSu rasgo caracteristico es : Obsesion por el exito`;
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      alert.className = " alert alert-dark";
      alert.innerHTML = `Pertenece a la generazion Baby Boom <br>Su rasgo caracteristico es : Ambicion `;
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      alert.className = " alert alert-dark";
      alert.innerHTML = `Pertenece a la generazion Silient Generation los ninios de la posguerra <br>Su rasgo caracteristico es : Austeridad `;
    } else {
      alert.className = " alert alert-dark";
      alert.innerHTML = `Fuera del rango del marco temporal`;
    }
  }

  esMayorDeEdad() {
    let alert = document.getElementById("alert");
    if (this.edad >= 18) {
      alert.className = " alert alert-dark";
      alert.innerHTML = `Es mayor de edad`;
    } else {
      alert.className = " alert alert-dark";
      alert.innerHTML = `No es mayor de edad`;
    }
  }

  imprimeDatos() {
    let alert = document.getElementById("alert");
    alert.className = " alert alert-dark";
    alert.innerHTML = `<h2>Datos</h2>
    Nombre: ${this.nombre}<br> 
    Edad: ${this.edad} años<br> 
    Dni: ${this.dni}<br>
    Sexo: ${this.sexo}<br>
    Peso: ${this.peso}Kg<br>
    Altura: ${this.altura}m<br>
    Año de nacimiento: ${this.anioNacimiento} <br>`;
  }
}
function crearObjeto(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let dni = document.getElementById("dni").value;
  let peso = document.getElementById("peso").value;
  const checkBoxMujer = document.getElementById("hombre");
  const checkBoxHombre = document.getElementById("mujer");
  let sexo = checkBoxHombre.checked ? checkBoxHombre.value : checkBoxMujer.value;
  let altura = document.getElementById("altura").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let anioNacimiento = new Date(fechaNacimiento).getFullYear();
  formulario.reset();
  let persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
  console.log(persona);
  let mostrarGeneracion = document.getElementById("btnGeneracion");
  mostrarGeneracion.addEventListener("click", () => {
    persona.mostrarGeneracion();
  });
  let mayorEdad = document.getElementById("btnEdad");
  mayorEdad.addEventListener("click", () => {
    persona.esMayorDeEdad();
  });
  let datos = document.getElementById("btnImprimirDatos");
  datos.addEventListener("click", () => {
    persona.imprimeDatos();
  });
}
let datos = document.querySelectorAll('input[type="number"]');
for (let i = 0; i < datos.length; i++) {
  datos[i].oninput = () => {
    if (datos[i].value.length > datos[i].maxLength) {
      datos[i].value = datos[i].value.slice(0, datos[i].maxLength);
    }
  };
}
