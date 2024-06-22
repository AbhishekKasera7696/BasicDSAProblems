// Program to print multiplication table of a number
function printTable(n){
    for(let i=1; i<=10; i++){
      let ans =   n + " * " + i + " = " + n * i;
      console.log(ans)
    }
}
(printTable(8))