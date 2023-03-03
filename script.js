const palette = document.getElementsByClassName('color');
const randomColorsBtn = document.getElementById('button-random-color');
const board = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');
document.getElementsByClassName('color')[0].className = 'color selected'; //Da ao preto a classe selected
let selectedColor = 'black'; //Pre seleciona o preto
let sample = document.getElementById('sample');

const lines = 10;
const coluns = 10;
const pixelSize = 40;

//evento de Cores aleatórias
randomColorsBtn.addEventListener('click', () => {
    for(let index = 1; index < 4; index += 1) {
        palette[index].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;
        console.log(palette[index]);
    }
});

//Evento de seleção de cores
for(index = 0; index < palette.length; index += 1) {
    const selectColor = document.getElementsByClassName('color');
    selectColor[index].addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        // console.log(event.target.className);
        if(selected){
            selected.className = 'color';
        }
        event.target.className = 'color selected';
        console.log(event.target.className);
        selectedColor = event.target.style.backgroundColor;
        console.log(selectedColor);
        sample.style.backgroundColor = `${selectedColor}`;
    });
}

//Cria o Quadro de pixels
for(let index = 0; index < lines; index += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    line.style.height = `${pixelSize + 2}px`;
    for(let indey = 0; indey < coluns; indey += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.height = `${pixelSize}px`;
        pixel.style.width = `${pixelSize}px`;
        line.appendChild(pixel);
    }
    board.appendChild(line);
}
const createBoard = () => {
};

//Evento de Muda a cor do pixel
for(let index = 0; index < lines * coluns; index += 1) {

    const pixel = document.getElementsByClassName('pixel');
    let selected = document.getElementsByClassName('selected').style;
    pixel[index].addEventListener('click', (event) => {
        event.target.style.backgroundColor = selectedColor;
        console.log(index);
        console.log(selectedColor);
    });
}

//evento de Limpar Board
clearBtn.addEventListener('click', () => {
    for(let index = 0; index < lines * coluns; index += 1) {
        const pixel = document.getElementsByClassName('pixel');
        let selected = document.getElementsByClassName('selected').style;
        pixel[index].style.backgroundColor = 'white';
    }
});
