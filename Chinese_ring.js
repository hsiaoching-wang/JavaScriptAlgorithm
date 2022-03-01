let n = 4;
let step = 0;

function CRD(n){     
    if(n > 2){
        CRD(n - 2);
        ++step;
        console.log(n+"is down");
        CRU(n-2);
        CRD(n - 1);
    }
    else if(n==2)
    {
        console.log( n-1, n+"is down");
        ++step; 
    }
    else if(n == 1)
    {
        console.log(n + "is down");
        ++step; 
    }
          
}
function CRU(n)
{
    if(n > 2)
    {
        CRU(n - 1);
        CRD(n-2);
        ++step;
        console.log(n+"is up");
        CRD(n - 2);
    }
    else if(n == 2)
    {
        ++step; 
        console.log(n-1,n+"is up");
    }
    else if(n == 1)
    {
        ++step; 
        console.log(n+"is up");
    }
    
}
CRD(n);
//if R1 is movable
//if Ri is the right one, Ri + 1 is movable
//if R1,R2 are in same mode, they can move togather