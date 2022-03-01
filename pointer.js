function averagePair(arr, avg){
    let left = 0;
    let right = arr.length - 1;
    let result = [];
    while(right > left){
        let temp_avr = (arr[right] + arr[left])/2;
        if(temp_avr > avg)
        {
            right--;
        }
        else if(temp_avr < avg)
        {
            left++;
        }
        else if(temp_avr == avg)
        {
            result.push(arr[right],arr[left]);
            right--;
            left++
        }
    }
    console.log(result);
    return(result);
}
averagePair([-11,0,1,2,3,9,14,17,21],1.5);