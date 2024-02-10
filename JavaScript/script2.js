document.addEventListener('DOMContentLoaded', function() {
    var imagenDeslizante = document.getElementById('imagenDeslizante');
  
    window.addEventListener('scroll', function() {
      var alturaPantalla = window.innerHeight;
      var distanciaTopImagen = imagenDeslizante.getBoundingClientRect().top;
  
      // Ajusta el valor 100 según la posición en la pantalla en la que deseas que aparezca la imagen
      if (distanciaTopImagen < alturaPantalla - 100) {
        imagenDeslizante.classList.add('aparecer');
      }
    });
  });