// Selecciona el botón
const button = document.querySelector('.presentacion_enlace_link');

// Añade un evento al hacer clic
button.addEventListener('click', () => {
  // Añade la clase pulsating para el efecto
  button.classList.add('pulsating');

  // Elimina el efecto después de 2 segundos (opcional)
  setTimeout(() => {
    button.classList.remove('pulsating');
  }, 2000);
});


// Seleccionamos los enlaces
const links = document.querySelectorAll('.presentacion_enlace_link');

// Creamos el objeto de audio con la ruta correcta
const clickSound = new Audio('audio/click.mp3');

// Añadimos el evento de clic a cada enlace
links.forEach(link => {
  link.addEventListener('click', () => {
    clickSound.currentTime = 0;  // Reinicia el sonido si ya está reproduciéndose
    clickSound.play();           // Reproduce el sonido
  });
});
