const myName = document.getElementById('name')
const myInput = document.getElementById('name-input')
const myButton = document.getElementById('main')
const main = document.getElementById('main')

myButton.addEventListener('click', () => {
    const userInput = myInput.value;
    myName.textContent = userInput; 
});


const color1 = document.getElementById('color-button1')
const color2 = document.getElementById('color-button2')
const color3 = document.getElementById('color-button3')

color1.addEventListener('click', () => {
    main.style.background = color1.value;

});

color2.addEventListener('click', () => {
    main.style.background = color2.value;

});

color3.addEventListener('click', () => {
    main.style.background = color3.value;

});

