// Given a sentence as a string str and a word word, the task is to check if the word is present in str or not. A sentence is a string comprised of multiple words and each word is separated with spaces.

function presentWord(str, word){
    let output = str.split(" ");
    for(let i=0; i<output.length; i++){
        if(output[i]==word){
            return 'yes'
        }
    }
    return "no"
};
console.log(presentWord("Geeks for Geeks", "Geeks"))