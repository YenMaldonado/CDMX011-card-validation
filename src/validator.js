/*const validator = {
  // ...
};

export default validator;*/
      
let getNumbers= document.getElementById("valid").addEventListener('click',getCardNumber);
const changeNumbers= document.getElementById("number");
let addAll = 0;

changeNumbers.addEventListener('input', replaceNumbers);



/*Condiciono la entrada de datos a sólo números del 0 al 9 mediante el uso de código ASCII*/
function onlyNumbers(event) {
  if(event.charCode >= 48 && event.charCode <= 57){
    return true;
   }
   return false;        
}

/* Declaro una variable donde pueda guardar el número que ingresa el usuario, posteriormente creo una función que primero obtiene el tamaño de la cadena alojada en mi var cardNumber */
let cardNumber;
function getCardNumber(){
  cardNumber = changeNumbers.value;
  let longNumber = cardNumber.length;

/*Creo una variable que pueda ir guardando los valores obtenidos en cada ciclo, y con ayuda del for recorremos cada caracter de la cadena obtenida anteriormente*/
  let counter= 1;
  for (let i=longNumber-1; i>=0; i--){
    let positionNumber = parseInt(cardNumber.charAt(i));

    /*Validamos si la posición es par, si el residuo es 0 entra al bloque y multiplica el numero que esta en posición par se multiplica por 2*/
    if(counter % 2==0){
      let multiplyPair = positionNumber *2;
     
      /* si el resultado de la multiplicación del bloque de arriba es mayor a 9, se suman los digitos del resultado, primero se hace una división/ 10, al resultado de la división se le suma el residuo. y se van sumando los valores asignados a addAll */
      if(multiplyPair > 9){
        addAll +=  parseInt(multiplyPair /10) + (multiplyPair % 10)    
      }else{
        addAll += multiplyPair;
      } 
    }else{
      addAll += positionNumber;
    }
    counter++;
  }
  if(addAll % 10 ==0){
    alert("tarjeta aceptada");
  }else{
    alert("tarjeta rechazada");
  } 
}
function replaceNumbers(){
  let userNumber = changeNumbers.value;
  let lengthReplace = userNumber.length;
  
  if(lengthReplace>=4){
    let diferencePosition = lengthReplace-4;
    
    let lastNumbers = userNumber.substring(diferencePosition);
    console.log(lastNumbers);
    let addCharacter = "";
      for(i=0; i<diferencePosition; i++){
       // console.log(userNumber.charAt(i));
       addCharacter+= "#";

      }
    //let valueReplace = addCharacter.replace(addCharacter, "#");
    //console.log(valueReplace);
    //console.log(addCharacter+lastNumbers);
    changeNumbers.value = addCharacter+lastNumbers;
  }

}


 
/* Función para enmascarar los dígitos de la tarjeta*/

