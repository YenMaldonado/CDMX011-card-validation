import validator from './validator.js';

const number=document.getElementById("number");
let firstNumber = "";
number.addEventListener('input',replaceString);

function replaceString(){
   let strNumber= number.value;
   let sizeNumber = firstNumber.length;
   let diference = sizeNumber - strNumber.length;
   console.log(diference);
   if(sizeNumber >strNumber.length){
       //eliminar últimos 2 dígitos de firstNumber
       firstNumber = firstNumber.slice(0, (diference));
       
   }else{
      firstNumber += strNumber.slice(diference);
   }

   number.value = validator.maskify(firstNumber); 
   console.log(firstNumber);

   
}

function verResultado(){
    if(validator.isValid(firstNumber)){
        document.getElementById("respuesta").innerHTML="Tarjeta Aceptada";
    }else{
        document.getElementById("respuesta").innerHTML="Tu tarjeta ha sido rechazada, verifica los datos ingresados";
    }
}
document.getElementById("valid").addEventListener('click', verResultado);



