function sayMyName(){
    console.log("P")
    console.log("O")
    console.log("O")
    console.log("J")
    console.log("A")
}
sayMyName()// execution of function
                   //parameters
function addTwoNum(number1, number2){
    console.log(number1 + number2);

} 


         //arguments
addTwoNum(3, 4);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("pooja"));
console.log(loginUserMessage());//if undefined