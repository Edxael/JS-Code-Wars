  // Finding multiples of a number
console.log("Find Multiples");

function findMultiples(int,limit){
    var holder = 0;
    var arr = [];
    for(var x = 0; x < (Math.floor(limit / int)); x++){
        holder += int;
        arr.push(holder);
    }
    return arr;
}


console.log(findMultiples(5,25));
