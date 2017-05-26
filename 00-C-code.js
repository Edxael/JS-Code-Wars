function modulo(num1, num2) {

    var whole = num1 / num2;
    var decimals = whole - Math.floor(whole);
    var total = decimals * num2;

    if((total - Math.floor(total)) > 0.5 ){
        total = Math.ceil(total);
    }

    console.log("Total Before changes: ", total);
    console.log(num1);


    if((num2 < 1) && (total < 1)){ total *= -1;}
    if((num1 < 1) && (total < 1)){ total *= -1;}

    console.log(" ");
    console.log("modulo reponse: ", (num1 % num2));
    return total;
}


console.log("-- My response: ", modulo(-4, 2));
