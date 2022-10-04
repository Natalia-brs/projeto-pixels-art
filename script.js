
//----------------------------Primeiro Requisito------------------------//
function addTitle () {
 const getHeader = document.getElementById('header');
 const title = document.createElement('h1');
 title.innerHTML = 'Paleta de Cores';
 title.id = 'title'
 title.style.textAlign = 'center'
 getHeader.appendChild(title);
 
}

//----------------------------------------------------------------------//


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
        getPaddles[index].style.backgroundColor = colors[index];  
    }
}
//---------------------------------------------------------------------//

addTitle();
addColorPalette();
paintPaddle();