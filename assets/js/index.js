'use strict';

const $form = document.getElementById('form');
const $gracias = document.getElementById('gracias');

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  const $nombreApellido = document.getElementById('nombreapellido').value;
  const $correo = document.getElementById('correo').value;
  const $telefono = document.getElementById('telefono').value;
  const $mensaje = document.getElementById('mensaje').value;
  const $contacto = document.getElementsByName('contacto');

  let infoContacto;
  for (let i = 0; i < $contacto.length; i++) {
    if ($contacto[i].checked) {
      infoContacto = $contacto[i].value;
      break;
    }
  }

  let informacion = {
    nombreCompleto: $nombreApellido,
    correo: $correo,
    telefono: $telefono,
    mensaje: $mensaje,
    contacto: infoContacto,
  };

  let bienvendida = `<h1>Bienvendid@  ${informacion.nombreCompleto} gracias por visitarnos.</h1>`;
  let despedida = `<h2>Gracias por confiar en nosotros,esperamos poder satisfacer tus necesidades y darte un agradable servicio.</h2>
  <a href="./productos.html" class="btn">Seguir Explorando</a>`;

  cambioEstilos();

  switch (informacion.contacto) {
    case 'telefono':
      $gracias.innerHTML =
        bienvendida +
        `<h2>Te contactaremos a tu telefono ${informacion.telefono}</h2>` +
        despedida;
      break;
    case 'email':
      $gracias.innerHTML =
        bienvendida +
        `<h2>Te contactaremos a tu correo ${informacion.correo}</h2>` +
        despedida;
    default:
      $gracias.innerHTML =
        bienvendida +
        `<h2>Te escribiremos pronto a tu telefono ${informacion.telefono}</h2>` +
        despedida;
      break;
  }

  console.log(informacion);

  $form.reset();
});

function cambioEstilos() {
  $form.style.display = 'none';
  $gracias.style.display = 'flex';
}
