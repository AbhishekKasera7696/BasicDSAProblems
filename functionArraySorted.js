// ProProgram to check if an array is sorted or not (Iterative and Recursive)gram to check if an array is sorted or not (Iterative and Recursive)
function arraySorted(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]<arr[i+1]){
            return "yes"
        }else{
            return "no"
        }
    }
}
console.log(arraySorted([20,20,45,89,89,90]))