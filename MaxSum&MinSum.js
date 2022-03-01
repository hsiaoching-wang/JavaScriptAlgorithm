function MaxSum(arr, size){
    let max_sum = -Infinity;
    if(size > arr.length){
        max_sum = null;
    }

    for(i = 0; i <= arr.length - size; i++){
        let sum = 0;
        for(let j = i; j < i + size; j++){
              sum+=arr[j];
        }
        if(sum > max_sum){
            max_sum = sum;
        }
    }
    console.log(max_sum);
    return max_sum;
}
function MinSum(arr, size){
    let min_sum = Infinity;
    if(size > arr.length){
        min_sum = null;
    }

    for(i = 0; i <= arr.length - size; i++){
        let sum = 0;
        for(let j = i; j < i + size; j++){
              sum+=arr[j];
        }
        if(sum < min_sum){
            min_sum = sum;
        }
    }
    console.log(min_sum);
    return min_sum;
}
MaxSum([2,7,3,0,6,1,-5,-12,-11],3);
MinSum([2,7,3,0,6,1,-5,-12,-11],3);