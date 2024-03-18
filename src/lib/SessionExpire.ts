export default function isTokenExpired(session:any) {
    const currentTime = Math.floor(Date.now() / 1000); // Convertimos la fecha actual a segundos
    const expirationDate = new Date(session.exp * 1000); // Convertimos el tiempo de expiración a milisegundos y creamos un objeto de fecha
    console.log('Fecha de expiración del token:', expirationDate.toLocaleString()); // Imprimimos la fecha de expiración en formato legible para humanos
    return session.exp < currentTime; // Comparamos el tiempo de expiración con el tiempo actual
  }
  
