function addTitle () {
 const getHeader = document.getElementById('header');
 const title = document.createElement('h1');
 title.innerHTML = 'Paleta de Cores';
 title.id = 'title'
 getHeader.appendChild(title);
 
}

addTitle();