


let toggler=document.querySelector('#toggler');
toggler.addEventListener('click',toggle);
let mode='dark';


function toggle()
{
    if(mode=='dark'){
    toggler.classList
        forBody();
        forDragDrop();
        forToggler();
        forInput();
        tasksLightMode();
    }
        if(mode=='dark')
        {
            mode='light';
        }
        else mode='dark';

        localStorage.setItem('currentMode',mode);
        console.log(mode);
    
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

let search=document.querySelector('.createButton');
let taskArea = document.querySelector('.taskList');
let idNumber=0;

search.addEventListener('click',taskMaker);
taskArea.addEventListener('dragover', handleDragOver);
taskArea.addEventListener('drop', handleDrop);

function taskMaker(){
    let task =document.createElement('li')
    task.setAttribute("draggable", "true");
   // task.setAttribute("ondragstart", "handleDragStart(event)");
    task.setAttribute('id',`${idNumber}`);
    idNumber=idNumber+1;
    task.addEventListener('dragstart', handleDragStart);

    let img1=new Image();
    img1.src=`images/uncomplete.png`
    img1.classList='forImages';

    let img2=new Image();
    img2.src=`images/delete-icon-vector-3.jpg`
    img2.classList='forImages2'
    

    let text=document.createElement('p');
    let input=document.querySelector('.inputField');
    text.innerHTML=input.value;
    text.classList='taskText'
    input.value='';

    task.appendChild(img1);
    task.appendChild(text);
    task.appendChild(img2);


    if(mode=='dark')
    {
        task.classList='tasks';
    }
    else if(mode!='dark')
    {
        
        task.classList='tasks';
        task.classList.toggle('lightTasks');
        text.classList.toggle('lightText');
    }



    img1.addEventListener('click',()=>
    {
     
        if(img1.getAttribute('src')=='images/complete.png')
        {
                img1.setAttribute('src','images/uncomplete.png');
                text.style.textDecoration='none';
            
        }
        else
        {
                img1.setAttribute('src','images/complete.png'); 
                text.style.textDecoration='line-through';

        }
    }
    )


    img2.addEventListener('click',()=>{
        task.remove();
    })


    taskArea.appendChild(task);
}


function tasksLightMode(){
    
    let myTasks=document.querySelectorAll('.tasks');
    myTasks.forEach(task => {
        task.classList.toggle('lightTasks');
    });
    

    let myText=document.querySelectorAll('.taskText');
     myText.forEach(text => {
        text.classList.toggle('lightText');
    });
}


//add the summary,drag and drop and local stroge then processed into react.

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
  }
  
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const targetId = e.target.closest('li').id;
    const draggedItem = document.getElementById(draggedId);
    const targetItem = document.getElementById(targetId);
    if (draggedId < targetId) {
      taskArea.insertBefore(draggedItem, targetItem.nextSibling);
    } else {
      taskArea.insertBefore(draggedItem, targetItem.nextSibling);
    }
  }