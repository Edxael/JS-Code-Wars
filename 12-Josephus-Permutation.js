// Location:
// https://www.codewars.com/kata/josephus-permutation/train/javascript

function josephus(items,k){
    var vueltas = items.length;
    var fallen = [];
    var reaper = 0;
    var index = 0;


    do{
        reaper += 1;

        if(reaper === k){
            fallen.push(items[index]);
            items[index] = undefined;  //  <<----- here we need to delete the elemet and make the array smaller
            items = items.filter(function(n){ return n != undefined });  // <<------ Here we clean the undefined
            index -= 1;
            reaper = 0;
        }

        index += 1;
        if(index >= items.length){index = 0;}
    }while (fallen.length < vueltas)

    return fallen;
}


var items = [1,2,3,4,5,6,7];
console.log(josephus(items,3));
