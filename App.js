let Array =[[1,2,3,4, "a"],[5,6,7,8, "b"],[9,10,11,12, "c"],[13,14,15,16, "d"], [10, 20, 30, 40, 50]] // [5x5]
let arrayTurn;


for(let a = 0; a < 1000000; a++) {

    arrayTurn = []// [[27,1,0mi,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] //[4x4]

    // //Marcos
    // for (let i = 0; i < Array.length; i++){
    //     arrayTurn.push([])
    //     for (let j = 0; j < Array[i].length; j++){
    //         arrayTurn[i].push(0);
    //     }
    // }
    // let max = Array.length - 1;
    // for (let i = 0; i < Array.length; i++){
    //     let subArray = Array[i]
    //     for (let j = 0; j<subArray.length; j++){
    //         arrayTurn[i][j] = Array[max-j][i];
    //     }
    // }

    // Arantxa
    for (let i = 0; i < Array.length; i++){
        arrayTurn.push([])
    }
    for (let i = Array.length-1; i>= 0; i--){
        let subArray = Array[i]
        for (let j = 0; j<subArray.length; j++){
            arrayTurn[j].push(subArray[j])
        }
    }
}


console.log (arrayTurn)