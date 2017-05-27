
function sumToMatch(numbers, target){
    numbers = numbers.filter((x) => {return x <= target});
    console.log(numbers);

    for(x in numbers){
        for(y in numbers){
            if(numbers.indexOf(numbers[x]) !== numbers.indexOf(numbers[y])){
                console.log("Combos: ", numbers[x], " ", numbers[y]);
                if((numbers[x] + numbers[y] === target)){
                    return [numbers[x], numbers[y]];
                }
            }
        }
    }

    return "No Match Found";
}


var numbers = [3, 34, 4, 12, 5, 2];
var target = 9;
console.log(sumToMatch(numbers, target));
