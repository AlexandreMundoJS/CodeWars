var moveZeros = function (arr) {
    let aux1 = [];
    let aux2 = [];
    arr.filter(el => {
      if (el === 0){
        aux1.push(el)
      } else {
        aux2.push(el)
      }
    });
    return arr = aux2.concat(aux1); 
  }