// Implementar solución aquí
function changeColor () {
console.log('Me has hecho clic!');

    // Obtener un color hexadecimal aleatorio
let randomHexValue = randomHexColor();

    // Cambiar el color de fondo del body
document.querySelector('body').style.backgroundColor = randomHexValue;

    // Actualizar el valor hexadecimal en el título
document.querySelector('#hex-value').textContent = randomHexValue;

}

    



function randomHexColor() {
const hexValues = '#0123456789ABCDEF';
    let result= '#';

        // Generar un color hexadecimal aleatorio de 6 dígitos
    for (let i = 0; i < 6; i++) {
        result += hexValues[Math.floor(Math.random() * 16)];
        
    }
    return result;

}
