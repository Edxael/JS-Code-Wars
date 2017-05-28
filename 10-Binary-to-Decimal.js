const binaryArrayToNumber = arr =>  {
    var arr2 = arr.slice(0);
    arr2.reverse();
    var value = 0;

    for(x = 0; x < arr2.length; x++){
        if((x === 0) && (arr2[x] === 1)){
            value = 1;
        }else if (arr2[x] === 1) {
            value += (2**x);
        }
    }
    return value;
}


var arr = [0,0,1,0];
console.log(binaryarr2ayToNumber(arr));
