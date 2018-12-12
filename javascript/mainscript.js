var d20Counter = 0;
var d12Counter = 0;
var d10Counter = 0;
var d8Counter = 0;
var d6Counter = 0;
var d4Counter = 0;
var newD20 = 1;
var newD12 = 101;
var newD10 = 201;
var newD8 = 301;
var newD6 = 401;
var newD4 = 501;
var newD202 = newD20++;
var newD122 = newD12++;
var newD102 = newD10++;
var newD82 = newD8++;
var newD62 = newD6++;
var newD42 = newD4++;
var totalroll= 0;


//this function gets called when a die is being dragged. This transfers the id of the die.
function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}


//this function gets called to allow a die to drop.
function allowDrop(ev) {
    ev.preventDefault();
}
//this function is called when die is dropped.

function drop(ev) {
    var dicetray = document.getElementById("dicetray");

    ev.preventDefault();  //prevent default handling of the data on drop; default is open as link on drop.
    var id = ev.dataTransfer.getData("text");  //get the id of the dropped die
    console.log(id);
    var target = ev.target;  //get the container in which the die is dropped.
    var className = target.className;

    //if the drop element is not a semester or a course group, set its parent as the drop element
    while (className !== 'dicetower' && className !== 'dice') {
        target = target.parentNode;
        if (!target)
            return;
    }


 
    
    //math lol
    target.appendChild(document.getElementById(id));
    if (id >= 0 && id <= 99)
    {
        d20Counter++;
        console.log(d20Counter);
        dicetray.innerHTML = dicetray.innerHTML + ' <img src="img/d20.jpg" class="diceimg dice" id= ' +  newD202 + ' draggable="true" ondragstart="drag(event)" ondrop="drop(event)" />';
        newD202 = newD20++;
    }
    if (id >= 100 && id <= 199)
    {
        d12Counter++;
        console.log(d12Counter);
        dicetray.innerHTML = dicetray.innerHTML + '<img src="img/d12.jpg" class="diceimg dice" id= ' +  newD122 + ' draggable="true" ondragstart="drag(event)" ondrop="drop(event)"/>';
        newD122 = newD12++;
    }
    if (id >= 200 && id <= 299)
    {
        d10Counter++;
        console.log(d10Counter);
        dicetray.innerHTML = dicetray.innerHTML + '<img src="img/d10.jpg" class="diceimg dice" id= ' +  newD102 + ' draggable="true" ondragstart="drag(event)" ondrop="drop(event)"/>';
        newD102 = newD10++;
    }
    if (id >= 300 && id <= 399)
    {
        d8Counter++;
        console.log(d8Counter);
        dicetray.innerHTML = dicetray.innerHTML + '<img src="img/d8.jpg" class="diceimg dice" id= ' +  newD82 + ' draggable="true" ondragstart="drag(event)" ondrop="drop(event)"/>';
    newD82 = newD8++;
    }
    if (id >= 400 && id <= 499)
    {
        d6Counter++;
        console.log(d6Counter);
        dicetray.innerHTML = dicetray.innerHTML + '<img src="img/d6.jpg" class="diceimg dice" id= ' +  newD62 + ' draggable="true" ondragstart="drag(event)" ondrop="drop(event)"/>';
    newD62 = newD6++;
    }
    if (id >= 500)
    {
        d4Counter++;
        console.log(d4Counter);
        dicetray.innerHTML = dicetray.innerHTML + '<img src="img/d4.jpg" class="diceimg dice" id= ' +  newD42 + ' draggable="true" ondragstart="drag(event)" ondrop="drop(event)"/>';
           newD42 = newD4++;
    }
}

//reset data
function resetplan() 
{
    var c = confirm("Are you sure you want to reset your dice?");
    if (c === true) {
       location.reload();
            }
        }

function roll(ev) 
{ 
    var totalDisplay = document.getElementById("finally");
    while (d20Counter >0) 
    {
    var d20Roll= (Math.floor((Math.random() * 20) + 1));
        totalroll=d20Roll + totalroll;
        d20Counter--;
        console.log("Your d20 roll is: " + d20Roll);
    }
     while (d12Counter >0) 
    {
    var d12Roll= (Math.floor((Math.random() * 12) + 1));
        totalroll=d12Roll + totalroll;
        d12Counter--;
        console.log("Your d12 roll is: " + d12Roll);
    }
     while (d10Counter >0) 
    {
    var d10Roll= (Math.floor((Math.random() * 10) + 1));
        totalroll=d10Roll + totalroll;
        d10Counter--;  
        console.log("Your d10 roll is: " + d10Roll);
    }
     while (d8Counter >0) 
    {
    var d8Roll= (Math.floor((Math.random() * 8) + 1));
        totalroll=d8Roll + totalroll;
        d8Counter--;
        console.log("Your d8 roll is: " + d8Roll);
    }
     while (d6Counter >0) 
    {
    var d6Roll= (Math.floor((Math.random() * 6) + 1));
        totalroll=d6Roll + totalroll;
        d6Counter--; 
        console.log("Your d6 roll is: " + d6Roll);
    }
     while (d4Counter >0) 
    {
    var d4Roll= (Math.floor((Math.random() * 4) + 1));
        totalroll=d4Roll + totalroll;
        d4Counter--;
        console.log("Your d4 roll is: " + d4Roll);
    }
    document.getElementById("finally").innerHTML= totalroll;
    console.log(totalroll);console.log(totalroll);console.log(totalroll);
   
}