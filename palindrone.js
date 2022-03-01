function palindrone(str){
    let arr = str.split("");
    let left = 0;
    let right = arr.length - 1;
    //let count = 0;
    while(left < right)
    {
        if(arr[left] == arr[right])
        {
            left++;
            right--;
            //count++;
        }
        else
        {
            return "not palidrone";
        }
    }
    return "is palidrone";
    // if(count == Math.floor(arr.length/2))
    // {
    //     return "is palidrone";
    // }
    // else
    // {
    //     return "not palidrone";
    // }
       
}

console.log(palindrone("fdsjaaf"));