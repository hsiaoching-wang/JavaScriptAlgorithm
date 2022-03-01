averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
function averagePair(arr, avg){
    let Pair = [];
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] == avg * 2)
            {
                Pair.push([arr[i],arr[j]]);
            }
        }
    }
    console.log(Pair);
    return Pair;
}
