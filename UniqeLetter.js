function UniqeLetter(str)
{
    let start = 0;
    let end = 0;
    let count = {};
    let length = -Infinity;
    while(end < str.length){
        if(count[str[end]]){
            count[str[start]]--;
            start++;
        }
        else{
            count[str[end]] = 1;
            end++;
            if(end - start > length){
                length = end - start;
            }
        }
    }
    return length;
}
let answer = UniqeLetter("thisishowwedoit");
console.log(answer);

