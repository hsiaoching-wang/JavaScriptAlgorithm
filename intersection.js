function intersection(arr1,arr2){
    let arrSum = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++)
        {
            if(arr1[i] == arr2[j])
                arrSum.push(arr1[i]);
        }
    }
    return arrSum;
}
function intersectionCounter(arr1,arr2){
    let result=[];
    let arr3 = arr1.concat(arr2);
    let counter = {};
    for(let i = 0; i < arr3.length; i++){
        if(!counter[arr3[i]])
            counter[arr3[i]] = 1;
        else
        {
            counter[arr3[i]]++;
        }   
    }
    for(let property in counter){
        if(counter[property] >= 2){
            result.push(property);
        }
    }
    console.log(result);
    return result;
}

let arr1 = [1,2,4,6,8,9];
let arr2 = [1,5,7,12,46,53,9];
console.log(intersection(arr1,arr2));
console.log(intersectionCounter(arr1,arr2));