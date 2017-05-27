function search(array, value) {
    var copis = array.slice(0);

    for(x in array){

        if(value === array[(Math.floor(array.length / 2))]){
            return copis.indexOf(value);
        }else{
            if(value > array[(Math.floor(array.length / 2))]){
                array.splice(0, (Math.floor(array.length / 2) + 1));
            }else{
                array.splice((Math.floor(array.length / 2) + 1), array[array.length -1]);
            }
        }

        if(value === array[0]){
            return copis.indexOf(value);
        }
    }
    return null;
}


var array = [1, 3, 16, 22, 31, 33, 34];
var value = 39;
console.log(search(array, value));
