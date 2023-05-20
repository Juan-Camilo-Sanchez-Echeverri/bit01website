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

  console.log(informacion);
});

function cambioEstilos() {
  $form.style.display = 'none';
  $gracias.style.display = 'flex';
}
