const topdisplay = document.getElementById('displaytop')
const bottomdisplay = document.getElementById('displaybottom')
const numbers = document.querySelectorAll('.numbers')

let displayvalue

numbers.forEach(function(currentBtn){
    currentBtn.addEventListener('click',enterNumber)
    })
    function enterNumber(){
     let firedButton = this.value;
     alert(firedButton)
    }


function add(a,b){
    return result = a+b;
}
function subtract (a,b){
    return result = a-b;
}
function multiply (a,b){
    return result = a*b;
}
function divide (a,b){
    return result = a/b;
}
function root (a){
    return result = Math.sqrt(a)
}
function negative (a){
    return a*-1;
}
function percentage (a,b){
   return result = a/b*100 + '%';
}
