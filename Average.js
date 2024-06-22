// Program for average of an array (Iterative and Recursive);

function findAverage(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    };
    let ans = sum / arr.length
    console.log(ans);
}

(findAverage([5, 3, 6, 7, 5, 3]))