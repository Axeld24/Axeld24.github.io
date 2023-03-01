const boton = document.querySelector("#boton");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const localidad = document.querySelector("#localidad");
const foto = document.querySelector("#foto");



const generarCV = async() => {
   try {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0]; 
    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first + " " + datos.name.last;
    telefono.textContent = datos.phone;
    correo.textContent = datos.email;
    localidad.textContent = datos.location.city + ", " + datos.location.country;

   } catch (error) {
    console.log(error);
   }
}

boton.addEventListener("click", generarCV);
