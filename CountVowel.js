// Program to count vowels in a string (Iterative and Recursive)
function countVowel(str){
    let vowel = "aeiou";
    let count = 0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowel.length; j++){
            if(str[i]===vowel[j]){
                count++
            }
        }
    };
    return count
    
}

console.log(countVowel("abc de"))