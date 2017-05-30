
function countCode(){
    var str = '=(t,n)=>{return t==="stick"?n%2 !== 0?-1:n/2:n*2;}';
    var total = str.length;
    console.log("Length of Code: ", total);
    console.log("");
}

stickOrChopsticks=(t,n)=>{return t==="stick"?n%2 !== 0?-1:n/2:n*2;}

var things = "chopstick";
var n = 5;
console.log( stickOrChopsticks=(things,n) );


countCode();
