// Check if given number is perfect square
function perfectSqure(num){
    while(num>=0){
        let ans = Math.sqrt(num);
            return (ans*ans === num);

    };
    return false
};

console.log( perfectSqure(16))