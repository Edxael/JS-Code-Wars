
function josephus(items,k){
    var fallen = [];
    var reaper = 0;
    var index = 0;

    do{
        if((typeof items[index]) === 'number'){reaper += 1;}

        if(reaper === 3){
            fallen.push(items[index]);
            items[index] = ".";
            reaper = 0;
        }

        index += 1;
        if(index >= items.length){index = 0;}
    }while (fallen.length < items.length)

    return fallen;
}


var items = [1,2,3,4,5,6,7];
console.log(josephus(items,3));
