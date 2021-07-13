const validator = {

  
  isValid(cardNumber){
    let positionNumber;
    let addAll=0;
    let multiplyPair ;

      for (let i = cardNumber.length - 1; i >= 0; i--) {
        positionNumber = parseInt(cardNumber.charAt(i));
  
        if (i % 2 != 0) {
          multiplyPair = positionNumber * 2;
             
          if (multiplyPair > 9) {
            addAll += parseInt(multiplyPair / 10) + (multiplyPair % 10)
          } else {
            addAll += multiplyPair;
          }
        } else {
        addAll += positionNumber;
        }
      }
      if (addAll % 10 == 0) {
        console.log("tarjeta Aceptada");
        return true;
      } else {
        console.log("tarjeta Rechazada");
        return false;
      }
    },

  maskify(userNumber) {
    //let userNumber = changeNumbers.value;
    let lengthReplace = userNumber.length;

    if (lengthReplace >= 4) {
      let diferencePosition = lengthReplace - 4;
      let lastNumbers = userNumber.substring(diferencePosition);
      let addCharacter = "";
      for (let i = 0; i < diferencePosition; i++) {
        
        addCharacter += "#";
      }
      userNumber = addCharacter + lastNumbers;
      //console.log(userNumber);
      return userNumber;
    }
  }
};

export default validator;



