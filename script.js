function cambiarDatos() {
    const nombre = document.getElementById('nuevoNombre').value;
    alert('Datos actualizados para: ' + nombre);
  }
  
  function cancelarReserva() {
    alert('Tu reserva ha sido cancelada.');
  }
  
  document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('contrasena').value;
    if (user === 'admin' && pass === '1234') {
      alert('Login exitoso');
      window.location.href = 'cartelera.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });