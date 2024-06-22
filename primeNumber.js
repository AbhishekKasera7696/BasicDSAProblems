// What are Prime Numbers?
function isPrime(num){
    let flag = true
  for(let i=2; i<num; i++){
      if(num % i === 0){
          flag = false;
          break;
      }
  };
  if(flag == true){
      console.log("true")
  }else{
      console.log("false")
  }
}
(isPrime(58))