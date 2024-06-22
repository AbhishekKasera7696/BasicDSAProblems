// Program for Armstrong Numbers
function Armstrong(num){
    let sum = 0;
    let ans = num.toString().split("");
    for(let i=0; i<ans.length; i++){
         sum = (sum + ans[i]**ans.length)
    }
    if(sum === num){
        return "yes"
    }else{
        return "no"
    }
}
console.log(Armstrong(153))