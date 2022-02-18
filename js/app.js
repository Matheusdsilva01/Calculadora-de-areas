var value1 = document.getElementById('value1');
var value2 = document.getElementById('value2');
var result = document.getElementById('result');
var h2 = document.querySelector('h2');
var button = document.getElementById('calc');
const modal = document.querySelector(".modal");
const closeModal = document.querySelector('#close-modal');

var imgs = document.querySelectorAll('img')
imgs.forEach(element => {
    element.addEventListener('click', (e) => {
        modal.style.display = "flex";
        switch (e.target.id) {
            case "Quadrado":
                resetInputs();
                calculateSquare();
                break;
            case "Circulo":
                resetInputs();
                calculateCircle();
                break;
            case "Triangulo":
                resetInputs();
                calculateTriangle();
                break;
            default:
                break;
        }
    })
});

closeModal.addEventListener('click', () => {
        modal.style.display = "none"
    }
)
//Valores a medir Quadrado
var number1 = 10

//Values to measure Triangle
var base = 10
var height = 8

//Values to measure Circle
var radius = 5
const pi = 3.14

// Measure the area of the square
function calculateSquare() {
    h2.innerText = "Quadrado"
    value1.style.display = "flex";
    value1.setAttribute('placeholder', "Lado")
    value2.style.display = "none";
    button.addEventListener('click', () => {
        result.value = value1.value ** 2
    });
}
// Measure the area of the triangle
function calculateTriangle() {
    h2.innerText = "Triângulo"
    value1.style.display = "flex";
    value1.setAttribute('placeholder', "Base")
    value2.style.display = "flex";
    value2.setAttribute('placeholder', "height")
    button.addEventListener('click', () => {
        result.value = (value1.value * value2.value) / 2
    });
    // result.value = (base * height) / 2
}
// Measure the area of the circle
function calculateCircle() {
    h2.innerText = "Circulo"
    value1.style.display = "flex";
    value1.setAttribute('placeholder', "radius")
    value2.style.display = "none";
    button.addEventListener('click', () => {
        result.value = pi * (value1.value ** 2)
    });
    // result.value = pi * (radius ** 2)
}
// Reset the inputs
function resetInputs() {
    value1.value = "";
    value2.value = "";
    result.value = ""
}