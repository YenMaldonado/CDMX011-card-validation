import validator from './validator.js';

/*const number=document.getElementById("number");
number.addEventListener('input',replaceString());*/

function getValue(){
 const number=document.getElementById("number").value;
 return number;
}

/*function replaceString(){
   console.log("aquí está");
   number.value = validator.maskify(number.value); 

}*/

function verResultado(){
    if(validator.isValid(getValue())){
        document.getElementById("respuesta").innerHTML="Tu tarjeta Aceptada"+validator.maskify(getValue());
    }else{
        document.getElementById("respuesta").innerHTML="Tu tarjeta ha sido rechazada, verifica los datos ingresados"+validator.maskify(getValue());
    }
}
document.getElementById("valid").addEventListener('click', verResultado);

/*const changeNumbers= document.getElementById("number");
let addAll = 0; 
changeNumbers.addEventListener('input', validator.replaceNumbers());*/

