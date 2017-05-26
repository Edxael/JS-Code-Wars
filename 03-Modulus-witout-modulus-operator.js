function modulo(num1, num2) {
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  if (num1 === 0) {
    return 0;
  }

  var remainderIsPositive = num1 >= 0;

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 -= num2
  }

  return remainderIsPositive ? num1 : 0 - num1;
}


console.log("-- My response: ", modulo(-4, 2));



// I did this and got all same results but no OK in the checker
// function modulo(num1, num2) {
//
//     var whole = num1 / num2;
//     var decimals = whole - Math.floor(whole);
//     var total = decimals * num2;
//
//     if((total - Math.floor(total)) > 0.5 ){
//         total = Math.ceil(total);
//     }
//
//     console.log("Total Before changes: ", total);
//     console.log(num1);
//
//
//     if((num2 < 1) && (total < 1)){ total *= -1;}
//     if((num1 < 1) && (total < 1)){ total *= -1;}
//
//     console.log(" ");
//     console.log("modulo reponse: ", (num1 % num2));
//     return total;
// }
