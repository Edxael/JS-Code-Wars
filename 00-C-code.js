
function codewarsTshirts(n, orders) {
    var available = { White: 0, Orange: 0, Blue: 0, Purple: 0, Red: 0, Black: 0 }
    for(x in available){ available[x] = n / 6;}
    var completed = [];
    var record = [];

    for(x in orders){

        if(available[orders[x][0]] !== 0){
            completed.push(1);
            available[orders[x][0]] -= 1;
            record.push([orders[x][0], orders[x][1], orders[x][0]]);

        }else if((available[orders[x][1]] !== 0)){
            completed.push(1);
            available[orders[x][1]] -= 1;
            record.push([orders[x][0], orders[x][1], orders[x][1]]);


        }else {
            var breaker = 0;
            for(z in record){

                if(orders[x][0] === record[z][2]){

                    if(available[record[z][0]] !== 0){
                        completed.push(1);
                        available[record[z][0]] -= 1;
                        break;
                    }
                    else if(available[record[z][1]] !== 0){
                        completed.push(1);
                        available[record[z][1]] -= 1;
                        break;
                    }
                }else if(orders[x][1] === record[z][2]){

                    if(available[record[z][0]] !== 0){
                        completed.push(1);
                        available[record[z][0]] -= 1;
                        break;
                    }
                    else if(available[record[z][1]] !== 0){;
                        completed.push(1);
                        available[record[z][1]] -= 1;
                        break;
                    }
                }

                breaker += 1;
                if(breaker === record.length){
                    completed.push(0)
                };
            }
        }
    }

    return completed.every((o) => {return o === 1});
}
