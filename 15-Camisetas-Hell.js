function codewarsTshirts(n, orders) {
    var available = { White: 0, Orange: 0, Blue: 0, Purple: 0, Red: 0, Black: 0 }
    console.log("Max: ", (n / 6));
    for(x in available){ available[x] = n / 6;}
    console.log(available);
    var completed = [];
    var record = [];
    console.log("");

    for(x in orders){
        console.log("The order: ",orders[x]);

        if(available[orders[x][0]] !== 0){
            completed.push(1);
            available[orders[x][0]] -= 1;
            record.push([orders[x][0], orders[x][1], orders[x][0]]);


            console.log("Placed: ", orders[x][0]);
            console.log(completed);
            // console.log(available);

        }else if((available[orders[x][1]] !== 0)){
            completed.push(1);
            available[orders[x][1]] -= 1;
            record.push([orders[x][0], orders[x][1], orders[x][1]]);


            console.log("Placed: ", orders[x][1]);
            console.log(completed);
            // console.log(available);

        }else {
            var breaker = 0;
            for(z in record){

                if(orders[x][0] === record[z][2]){

                    if(available[record[z][0]] !== 0){
                        console.log("Sy Hay: ", record[z][0]);
                        completed.push(1);
                        available[record[z][0]] -= 1;
                        break;
                    }
                    else if(available[record[z][1]] !== 0){
                        console.log("Sy Hay: ", record[z][1]);
                        completed.push(1);
                        available[record[z][1]] -= 1;
                        break;
                    }
                }else if(orders[x][1] === record[z][2]){

                    if(available[record[z][0]] !== 0){
                        console.log("Sy Hay: ", record[z][0]);
                        completed.push(1);
                        available[record[z][0]] -= 1;
                        break;
                    }
                    else if(available[record[z][1]] !== 0){
                        console.log("Sy Hay: ", record[z][1]);
                        completed.push(1);
                        available[record[z][1]] -= 1;
                        break;
                    }
                }




                breaker += 1;
                if(breaker === record.length){
                    completed.push(0)
                };
                console.log("");
            }
        }
        console.log("");
    }



    console.log(available);
    console.log(completed);

    return completed.every((o) => {return o === 1});
}

var orders =
[["Black","Blue"],["Purple","Blue"],["Blue","White"],["White","Orange"],["White","Blue"],["Purple","White"],["White","Purple"],["White","Red"],["Blue","Purple"],["Orange","White"],["Black","Blue"],["Purple","Red"],["Blue","Red"],["Blue","White"],["Purple","White"],["Purple","Blue"],["Orange","Red"]]
 ;
console.log(codewarsTshirts(18, orders));
