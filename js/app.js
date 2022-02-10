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
                medirQuadrado()
                break;
            case "Circulo":
                medirCirculo()
                break;
            case "Triangulo":
                medirTriangulo()
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
//Valores para medir Quadrado
var number1 = 10

//Valores para medir Triangulo
var base = 10
var altura = 8

//Valores para medir Circulo
var raio = 5
const pi = 3.14

// medir a area do quadrado
function medirQuadrado() {
    h2.innerText = "Quadrado"
    value1.style.display = "flex";
    value1.setAttribute('placeholder', "Lado")
    value2.style.display = "none";
    button.addEventListener('click', () => {
        result.value = value1.value ** 2
    });
}
// medir a area do triangulo
function medirTriangulo() {
    h2.innerText = "Triângulo"
    value1.style.display = "flex";
    value1.setAttribute('placeholder', "Base")
    value2.style.display = "flex";
    value2.setAttribute('placeholder', "Altura")
    button.addEventListener('click', () => {
        result.value = (value1.value * value2.value) / 2
    });
    // result.value = (base * altura) / 2
}
// medir a area do circulo
function medirCirculo() {
    h2.innerText = "Circulo"
    value1.style.display = "flex";
    value1.setAttribute('placeholder', "Raio")
    value2.style.display = "none";
    button.addEventListener('click', () => {
        result.value = pi * (value1.value ** 2)
    });
    // result.value = pi * (raio ** 2)
}


