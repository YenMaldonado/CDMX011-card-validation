/*const validator = {
  // ...
};

export default validator;*/

document.getElementById("valid").addEventListener('click',getCardNumber);

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
  console.log("Si entra");
  cardNumber = document.getElementById('number').value;
  let longNumber = cardNumber.length;


/*Creo una variable que pueda ir guardando los valores obtenidos en cada ciclo, y con ayuda del for recorremos cada caracter de la cadena obtenida anteriormente*/
  let addAll = 0;
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
    console.log("tarjeta aceptada");
  }else{
    console.log("tarjeta rechazada");
  }
  
}

 

