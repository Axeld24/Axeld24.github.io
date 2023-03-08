const boton = document.querySelector("#boton");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const localidad = document.querySelector("#localidad");
const foto = document.querySelector("#foto");
const fecha1 = document.querySelector("#fecha1");
const fecha2 = document.querySelector("#fecha2");
const empresa1 = document.querySelector("#empresa1");
const empresa2 = document.querySelector("#empresa2");

let experiencia1 = document.getElementById("trabajo1");
let  experiencia2 = document.getElementById("trabajo2");

const trabajos = ["Administrador", "Contador", "Ingeniero", 
"Sistemas", "gerente", "Seguridad", "Chofer", "Mecánico", 
"Técnico electronico", "Operador de fábrica"];

const empresas = ["Banco Galicia", "Mercado Libre", "Ualá",
"Curtiembre Arlei", "Santander", "SAP Argentina",
"Quilmes ", "Accenture", "Globant", "Cargill"];




const generarCV = async() => {
   try {
      //API
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0]; 

    //Variables
    let a = Math.round(Math.random()*9);
    let b = Math.round(Math.random()*9);
    let c = Math.round(Math.random()*9);
    let d = Math.round(Math.random()*9);

    const trabajo1 = trabajos[a];
    const trabajo2 = trabajos[b];

    let año1 = Math.round(Math.random()*5 + 2008)
    let año2 = Math.round(Math.random()*7 + 2016)

    // Cambios del DOM 
    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first + " " + datos.name.last;
    telefono.textContent = datos.phone;
    correo.textContent = datos.email;
    localidad.textContent = datos.location.city + ", " + datos.location.country;
    experiencia1.innerText = trabajo1;
    experiencia2.innerText = trabajo2;
    fecha1.textContent = año1 + " - " + (año1 + 3);
    fecha2.textContent = año2 + " - " + "Actualidad";
    empresa1.textContent = empresas[c]
    empresa2.textContent = empresas[d]
   
    
    //Consola
    console.log(empresas[c]);
    console.log(empresas[d]);
   } catch (error) {
    console.log(error);
   }
}

boton.addEventListener("click", generarCV);


/*

*/