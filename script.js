"use strict";
var operand1=null;
var operand2=null;
var operator=null;
var display=document.getElementById("display");
var buttons=document.getElementsByClassName("button")

document.addEventListener("keypress",function(event)
{
    console.log(event);
    if(event.key=="=" ||event.key=="Enter")
    {
        display.innerText=eval(display.innerText);
        //why cant add break and keycode not working
    }
    else if(event.key=="c")
    {
        display.innerText="";
    }
    else {
    display.innerText+=event.key;
    }

});
for(var i=0;i<buttons.length;i++)
{   

    buttons[i].addEventListener("click",function()
    {   

        var value=  this.dataset.value;
        if(value!="=")
        {
        display.innerText+=value;
        }
     
        if(value=="+/-")
        {
            operand1=parseFloat(display.innerText);
            operand1=-operand1;
            display.innerText=operand1;
        }
        else if(value=="AC")
        {
            operand1=0;
            operator=null;
            display.innerText="";
        }
        else if(value=="=")
        {
            display.innerText=eval(display.innerText);
         
        }  

    });

}