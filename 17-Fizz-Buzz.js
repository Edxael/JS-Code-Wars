// Basic creation of the Fizz-Buzz Game

console.log("Hello Fizz-Buzz");
console.log("");

function fizzBuzz(){

    for(var x = 1; x <= 100; x++){
        if((x % 3 === 0) && (x % 5 === 0)){
            console.log("Number: ", x, " is Fizz-Buzz");
        }else if(x % 3 === 0){
            console.log("Number: ", x, " is Fizz");
        }else if (x % 5 === 0) {
            console.log("Number: ", x, " is Buzz");
        }else{
            console.log("Number: ", x);
        }
    }

}


fizzBuzz();
