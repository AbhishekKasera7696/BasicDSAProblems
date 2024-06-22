// Count number of even and odd length elements in an Array;
// Given an array arr[] of integers of size N, the task is to find the number elements of the array having even and odd length.
function countLength(arr){
    let evenCount = 0;
    let oddCount = 0;
    for(let i=0; i<arr.length; i++){
        let n = arr[i].toString();
        if(n.length % 2 === 0){
            evenCount++
        }else{
           oddCount++
        }
    };
     console.log("countEven>>>>>" + evenCount + " " +"countOdd>>>>>" + oddCount)
}

countLength([ 12, 44, 213, 232, 3433 ])