const $form = document.getElementById('form');

const $nombreApellido = document
  .getElementById('nombreapellido')
  .value.toString();
const $correo = document.getElementById('correo').value;
const $telefono = document.getElementById('telefono').value;
const $mensaje = document.getElementById('mensaje').value;
const $contacto = document.getElementsByName('contacto');
const $novedades = document.getElementById('novedades').checked;
const $gracias = document.getElementById('gracias');

const $nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');

function valueInput() {
  let info;
  for (let i = 0; i < $contacto.length; i++) {
    if ($contacto[i].checked) {
      info = $contacto[i].value;
      break;
    }
  }
  return info;
}

let infoContacto = valueInput();

let informacion = {
  nombreCompleto: $nombreApellido,
  correo: $correo,
  telefono: $telefono,
  mensaje: $mensaje,
  contacto: infoContacto,
};

$form.addEventListener('submit', () => {
  event.preventDefault();

  for (let i = 0; i < $contacto.length; i++) {
    if ($contacto[i].checked) {
      infoContacto = $contacto[i].value;
      break;
    }
  }

  console.log(informacion);
});

function cambioEstilos() {
  $form.style.display = 'none';
  $gracias.style.display = 'show';
  $gracias.style.display = 'flex';
}
