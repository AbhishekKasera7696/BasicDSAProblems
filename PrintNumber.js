// Program to print the given digit in words
// Input: N = 1234 
// Output: One Two Three Four ;

function printNumber(digit){
    switch(digit){
        case "0" :
            console.log("Zero");
            break;
        case "1" :
            console.log("One");
            break;
        case "2" :
            console.log("Two");
            break;
        case "3" :
            console.log("Three");
            break;
         case "4" :
            console.log("Four");
            break;
        case "5" :
            console.log("Five");
            break;
         case "6" :
            console.log("Six");
            break;
         case "7" :
            console.log("Seven");
            break;
        case "8" :
            console.log("Eight");
            break;
        case "9" :
            console.log("Nine");
            break;
    }
};

function printValue(N){
    for(let i=0; i<N.length; i++){
        printNumber(N[i]) 
    };
}

let N = "45678"
printValue(N)
