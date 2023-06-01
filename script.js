let toggler=document.querySelector('#toggler');
toggler.addEventListener('click',toggle);
let mode='dark';

function toggle()
{
    if(toggler.classList=="dark"){
        forBody();
        forDragDrop();
        forToggler();
        forInput();
        tasksLightMode();
        if(mode=='dark')
        {
            mode='light';
        }
        else mode='dark'
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


/*
GENERATING TASk

1,make a new div give it classList='task'
img=img.png
text=input.value
img2=img/xpng

task.appendChild(img);
task.appendChild(text);
task.appendChild(img2);



img.addeventListener(click,()=>{img.src='ticked.png,
text.classList.toggle('underlinedText)})

img2.addEventListener(click,()=>{delete(task)})




STYLE
the same as the search area both in light and dark mode
 */




let search=document.querySelector('.createButton');

search.addEventListener('click',taskMaker);
function taskMaker(){
    let task =document.createElement('div')
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

    
    let taskArea=document.querySelector(".taskList");
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


