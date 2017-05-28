

function lightBulbs(lights, n) {
    console.log("Before chan",lights);
    console.log("");

    for(var z = 0; z < n; z++){
        var arr = lights.slice(0);
        console.log("Copy to h: ", arr);

        for(var x = 0; x < arr.length; x++){
            if(x === 0){
                if(arr[arr.length -1] === 1){
                    if(lights[x] === 0){
                        lights[x] = 1;
                    }else {
                        lights[x] = 0;
                    }
                }
            }else {
                if(arr[x - 1] === 1){
                    if(lights[x] === 0){
                        lights[x] = 1;
                    }else {
                        lights[x] = 0;
                    }
                }
            }
        }
        console.log("Cycle: ", z, " ", lights);
        console.log("");
    }

    console.log("");
    return lights;

}

var lights = [0, 0, 1, 1, 1];
console.log(lightBulbs(lights, 5));
