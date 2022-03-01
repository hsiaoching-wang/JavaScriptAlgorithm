function isSubsequence(str1,str2)
{
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    if(arr1.length == 0)
    {
        return "true";
    }
    let p1 = 0;
    let p2 = 0;


    while(p2 <= arr2.length)
    {
        if(arr1[p1] == arr2[p2]){
            p1++;
        }
        if(p1 >= arr1.length){
            return true;
        }
        p2++;
    }
    return false;
    //let count = 0;
    // while(p2 <= arr2.length - 1)
    // {
    //     if(arr1[p1] == arr2[p2])
    //     {
    //         p1++;
    //         p2++;
    //         count++;
    //     }
    //     else
    //     {
    //         p2++;
    //     }
    // }
    // if(count==arr1.length)
    // {
    //     console.log(count);
    //     console.log("is subsequence");
    // }   
    // else
    // {
    //     console.log(count);
    //     console.log("isn't subsequence");
    // }   
}

isSubsequence("hello","hello dear");
isSubsequence("book","brooklin");
isSubsequence("abc","bac");
