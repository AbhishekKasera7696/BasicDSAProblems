// Program for Sum of the digits of a given number;

function sumOfDigit(num){
    // let ans = num.toString().split(",").join();
    // let sum = 0;
    // for(let i=0; i<ans.length; i++){
    //     sum += parseInt(ans[i])
    // };
    // console.log(sum)
    let sum = 0;
    while(num !== 0){
       sum = sum + (num%10);
       num = parseInt(num/10)
    };
    console.log(sum)
};

sumOfDigit(687)