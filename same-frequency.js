function same_freauency(str1, str2){
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    if(arr1.length !== arr2.length)
    {
        return false;
    }
    let counter1 = {};
    let counter2 = {};
    for(let i = 0; i < arr1.length; i++)
    {
        if(!counter1[arr1[i]])
            counter1[arr1[i]] = 1;
        else
            counter1[arr1[i]]++;
    }
    for(let i = 0; i < arr2.length; i++)
    {
        if(!counter2[arr2[i]])
            counter2[arr2[i]] = 1;
        else
            counter2[arr2[i]]++;
    }
    console.log(counter1,counter2);
    for(let property in counter1){
        console.log("This is counter1"+ property+" " + counter1[property]);
        console.log("This is counter2"+ property+" " + counter2[property]);
        if(!counter2[property])
            return false;
        if(counter2[property] !== counter1[property])
            return false;
    }
    return true;

}
let str1 = "abbac";
let str2 = "bbaad";
console.log(same_freauency(str1,str2)); 