// Program for factorial of a number
function factorial(num){
    // let mul = 1
    // for(let i=num; i>0; i--){
    //     mul = mul * i
    // };
    // return mul
    
    if(num == 0 || num == 1){
        return 1
    }else{
        return (num * factorial(num-1))
    }
}
console.log(factorial(5))