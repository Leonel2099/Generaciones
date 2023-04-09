const generarDNI = () => Math.floor(Math.random() * (99999999 - 00000000 + 1) + 00000000);

class Persona{

  constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
    this.nombre=nombre;
    this.edad=edad;
    this.dni=dni;
    this.sexo=sexo;
    this.peso=peso;
    this.altura=altura; 
    this.anioNacimiento=anioNacimiento; 
  }

  mostrarGeneracion(){
    if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
      document.write(`Pertenece a la generazion Z <br>`);
      document.write(`Su rasgo caracteristico es : Irreverencia <br>`);
    }else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
      document.write(`Pertenece a la generazion Y millennials <br>`);
      document.write(`Su rasgo caracteristico es : Frustacion <br>`);
    }else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
      document.write(`Pertenece a la generazion X <br>`);
      document.write(`Su rasgo caracteristico es : Obsesion por el exito <br>`);
    }else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
      document.write(`Pertenece a la generazion Baby Boom <br>`);
      document.write(`Su rasgo caracteristico es : Ambicion <br>`);
    }else if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
      document.write(`Pertenece a la generazion Silient Generation los ninios de la posguerra <br>`);
      document.write(`Su rasgo caracteristico es : Austeridad <br>`);
    }else{
      alert(`Fuera del rango del marco temporal`);
    }
  }
  
  esMayorDeEdad(){
    if(this.edad >= 18){
      document.write(`Es mayor de edad`);
    }else{
      document.write(`No es mayor de edad`);
    }
  }

  imprimeDatos(){
    document.write('<h2>Datos</h2>')
    document.write(`Nombre: ${this.nombre},<br> `);
    document.write(`Edad: ${this.edad} años,<br> `);
    document.write(`Dni: ${this.dni}<br>`);
    document.write(`Sexo: ${this.sexo}<br>`);
    document.write(`Peso: ${this.peso}<br>`);
    document.write(`Altura: ${this.altura}<br>`);
    document.write(`Año de nacimiento: ${this.anioNacimiento} <br>`);
  }

}