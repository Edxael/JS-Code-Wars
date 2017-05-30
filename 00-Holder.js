function wave(str){
    var arr = str.split("");
    var wave = [];
    var temp = "";
    for(x in arr){
        console.log(arr);
        arr[x] = arr[x].toUpperCase();
        wave.push( arr.join() );

        console.log(arr);
        arr[x] = arr[x].toLowerCase();
        console.log("");

    }
    return wave;
}

var str = "hello";
console.log(wave(str))
