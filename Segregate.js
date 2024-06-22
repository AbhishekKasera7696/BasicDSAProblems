// Segregate 0s and 1s in an array
function segregate(arr){
    let a = [];
    let b = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            a.push(arr[i])
        }
        else if(arr[i] === 1){
            b.push(arr[i])
        }
    };
    console.log(a.concat(b))
}

segregate([ 0, 1, 0, 1, 1, 1 ])