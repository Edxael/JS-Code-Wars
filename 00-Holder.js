
function josephus(items,k){
    var fallen = [];
    console.log(items);
    console.log(fallen);
    console.log("");

    reaper = 0;
    index = 0;

    var cycles = 30;
    var current = 1;

    do{
        console.log("Cycle: ", current, "  Typeof: ", items[index]);
        if((typeof items[index]) === 'number'){reaper += 1;}

        console.log("Reaper: ", reaper, " Index: ", index );
        console.log(items);
        console.log(fallen);
        console.log(" ");




        if(reaper === 3){
            fallen.push(items[index]);
            items[index] = ".";
            reaper = 0;
        }


        index += 1;
        if(index >= items.length){index = 0;}
        current += 1;
    }while (fallen.length < items.length)

    return fallen;
}
