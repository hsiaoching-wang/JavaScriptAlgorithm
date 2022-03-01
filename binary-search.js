function binary_search_myself(arr,n){
    console.log("running");
    let min = 0;
    let max = arr.length - 1;
    let middle = Math.ceil((min + max)/2);
    let i = 0;
    while(n !== arr[middle] && i <  Math.log(arr.length) ){
        if(n > arr[middle])
        {
            min = middle + 1;
            middle = Math.ceil((min + max)/2);
        }
        else if(n < arr[middle])
        {
            max = middle - 1;
            middle = Math.ceil((min + max)/2);
        }
        i++;
    }
    if(n == arr[middle]){
        console.log("spend "+i+" step");
        return middle;
    }
        
    else{
        console.log("not find");
        console.log("spend "+i+" step");
        return -1;
    }
        
}
function binary_search(arr,n){
    console.log("running");
    let min = 0;
    let max = arr.length - 1;
    let middle = Math.ceil((min + max)/2);
    let i = 0;
    let step = 0;
    while(min <= max){
        middle = Math.ceil((min + max)/2);
        if(n > arr[middle])
        {
            min = middle + 1;
        }
        else if(n < arr[middle])
        {
            max = middle - 1;
        }
        else if(n == arr[middle])
        {
            console.log("spend "+step+" step");
            return middle;
        }
           
        step++;
    }
    
    console.log("not find");
    console.log("spend "+step+" step");
    return -1;
}

let arr = [1,2,4,6,7,9,10,12,14,16,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,37,48];
console.log("at "+"position "+binary_search_myself(arr,5));
console.log("at "+"position "+binary_search(arr,5));

