function linear_search(array, n){
    for(i=array.length ; i >= 0; i--)
    {
        if(array[i] == n)
            return i;
    }
    return -1;
}
let array = [1,2,4,5,7,8,9];
console.log(linear_search(array,1));