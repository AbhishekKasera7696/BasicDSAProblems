// Write a program to reverse digits of a number

function rev(num){
    let reverse = 0;
   while(num != 0){
       reverse = (num % 10) + (reverse*10);
       num = Math.floor(num/10);
   };
   console.log(reverse)
}
rev(5678)