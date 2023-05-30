let toggler=document.querySelector('#toggler');
toggler.addEventListener('click',toggle);

function toggle()
{
    if(toggler.classList=="dark"){
        forBody();
        forDragDrop();
        forToggler();
        forInput();
    }
}

function forToggler()
{
    
    if(toggler.getAttribute('src')=='images/icon-sun.svg')
    {
            toggler.setAttribute('src','images/icon-moon.svg');
        
    }
    else
    {
            toggler.setAttribute('src','images/icon-sun.svg') 
        
    }
};


function forBody(){
let body=document.body;
  
    body.classList.toggle('lightBody'); 

}

function forDragDrop(){
let dragDrop=document.querySelector('#dragDrop');
dragDrop.classList.toggle('dragDrop');
dragDrop.classList.toggle('lightDragDrop');
}

function forInput(){
    let area=document.querySelector('.searchArea');
    let createButton=document.querySelector('.createButton');
    area.classList.toggle('searchAreaLight');
    createButton.classList.toggle('createLight');
}