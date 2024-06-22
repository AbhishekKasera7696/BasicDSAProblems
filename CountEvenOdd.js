// Count number of even and odd elements in an array
// For the given array of integers, count even and odd elements.
function countEvenOdd(arr){
    let countEven = 0;
    let countOdd = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            countEven++;
        }else{
            countOdd++;
        }
    }
    console.log("countEven>>>>>" + countEven + " " +"countOdd>>>>>" + countOdd)
};
countEvenOdd([22, 32, 42, 52, 62])