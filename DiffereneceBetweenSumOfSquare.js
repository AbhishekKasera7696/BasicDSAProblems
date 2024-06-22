// Difference between sum of the squares of first n natural numbers and square of sum

function myFunction(num){
    let sum = 0;
    let sum2 = 0;
   for(let i=1; i<=num; i++){
      sum2 = sum2 + (i*i);
      sum = sum + i;
   };
     let sumSquare = sum * sum;
     let temp = sum2;
     let ans = Math.abs(sumSquare - temp);
     return ans;
}
console.log(myFunction(3))