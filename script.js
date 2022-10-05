

//----------------------------------Primeiro Requisito-----------------------------//
function addTitle () {
 const getHeader = document.getElementById('header');
 const title = document.createElement('h1');
 title.innerHTML = 'Paleta de Cores';
 title.id = 'title'
 title.style.textAlign = 'center'
 getHeader.appendChild(title);
 
}

//---------------------------------------------------------------------------------//


//--------------------------Segundo e Terceiro Requisito---------------------------//
function addColorPalette () {
    const getSection = document.getElementById('color-palette');
     getSection.style.textAlign = 'center';
    for (let index = 0; index < 4; index += 1) {
        const paddles = document.createElement('div');
        getSection.appendChild(paddles);
        paddles.className = 'color'
        paddles.style.border = '1px solid black'
    }

}


function paintPaddle () {
    const getPaddles = document.getElementsByClassName('color');
    const colors = ['black', 'chartreuse', 'fireBrick', 'dodgerBlue' ]
    for (let index = 0; index < getPaddles.length; index += 1) {
        getPaddles[index].style.backgroundColor = colors[index]
    
    }
}
//--------------------------------------------------------------------------------------//


//------------------------------------Requisito Quatro----------------------------------//
 function generateRandomColors () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    
}


function button () {
    const getButton = document.getElementById('button-random-color');
    getButton.innerText = 'Cores aleatórias'
    const getPaddles2 = document.getElementsByClassName('color');
    getButton.addEventListener('click', function(){
        for (let index = 1; index < 4; index += 1) {
            getPaddles2[index].style.backgroundColor = generateRandomColors()
        }
    })         
}
 //------------------------------------------------------------------------------------------//  
 
 
//---------------Requisito 6 e 7--------------------------------------------------------------//
 function boardPixel () {
   const getPixel = document.getElementById('pixel-board');
   for (let index = 0; index < 25; index += 1) {
    const divPixels = document.createElement('div')
    divPixels.className = 'pixel'
    getPixel.appendChild(divPixels)
    divPixels.style.backgroundColor = 'white'
   }
 }

 //------------------------------------------------------------------------------------------------//

addTitle();
addColorPalette();
paintPaddle();
button();
generateRandomColors();
boardPixel();