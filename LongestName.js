// Display the Longest Name
// Given a list of names in an array arr[] of size N, display the longest name contained in it. If there are multiple longest names print all of that.

function LongestName(str){
    let temp = [];
    let count = 0;
   for(let i=0; i<str.length; i++){
        if(str[i].length >= count){
        count = str[i].length;
        temp.push(str[i])
        }
     
     
   };
   return temp.toString().split(',').join(' ')
}
console.log(LongestName(["GeeksforGeeks", "FreeCodeCamp","StackOverFlow",  "MyCodeSchool"]))
