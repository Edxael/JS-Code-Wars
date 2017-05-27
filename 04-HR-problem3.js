
function singleNumber(str){

    var arr = str.split(" ");

    for(x in arr){
        arr[x] = parseInt(arr[x]);
    }

    var odds = 0;
    var lastOdd = 0;
    var even = 0;
    var lastEvenev = 0;

    for(z in arr){
        if(arr[z] % 2 === 0){
            even += 1;
            lastEven = arr[z];
        }

        if(arr[z] % 2 !== 0){
            odds += 1;
            lastOdd = arr[z];
        }
    }



    if(even < 2){
        var position = (arr.indexOf(lastEven) ) + 1;
        var endText = " number is even, while the rest of the numbers are odd";

    }else if (odds < 2) {

        var position = (arr.indexOf(lastOdd) ) + 1;
        var endText = " number is odd, while the rest of the numbers are even";

    }else {
        var position = 0;
        var endText = "The list of numbers is longer than parameters.";
    }



    var location = "";
    switch (position) {
        case 1:
            location = position + " - First";
            break;
        case 2:
            location = position + " - Second";
            break;
        case 3:
            location = position + " - Third";
            break;
        case 4:
            location = position + " - Fourth";
            break;
        case 5:
            location = position + " - Fifth";
            break;
        case 6:
            location = position + " - Sixth";
            break;
        default:
            location = position + " - Out of range";
            break;
    }

    return (location + endText);
}


var str = '1 10 1 1';
console.log(singleNumber(str));
