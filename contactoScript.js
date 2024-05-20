function validateForm() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let consulta = document.getElementById('consulta').value;
    let motivo = document.getElementById('motivo').value;
    let contacto = document.querySelector('input[name="contacto"]:checked');

    if (nombre == '' || correo == '' || consulta == '' || motivo == '' || !contacto) {
        //alert('No olvides completar todos los campos.');
        return false;
    } else{
      //handleSubmit();
    }
    return true;
}


var form = document.getElementById("contactForm");
async function handleSubmit(event) {
  var status = document.getElementById("my-form-status");
  if (!validateForm()){
    status.innerHTML = "No olvides completar todos los campos.";
    return;
  }
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Mensaje recibido, te contactaremos pronto!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Hubo un error, intenta nuevamente"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Hubo un error, intentá nuevamente"
  });
}
form.addEventListener("submit", handleSubmit)