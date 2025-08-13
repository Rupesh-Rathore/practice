/*
This is a program of faulty calculator where the accuracy of calculator is 90% i.e. their is 10% chance the calculator will give incoorect answer on the pre-programmed instructions.
if faultness is present then :
+ --- *
* --- +
- --- /
/ --- **

first try to do it your-self then go for the hint



*hint:- use random*
*/

const Calculate = ( num1, num2, operation) => {
    let faultIndex = Math.floor(Math.random()*101);
    console.log(`Accuracy is ${faultIndex}%`);
    if(faultIndex<=10){
        console.log("Faultness is present");
        switch(operation){
            case '+' :
                return ` ${num1} ${operation} ${num2} = ${num1-num2}`;
            case '*' :
                return ` ${num1} ${operation} ${num2} = ${num1+num2}`;
            case '-' :
                return ` ${num1} ${operation} ${num2} = ${num1/num2}`;
            case '/' :
                return ` ${num1} ${operation} ${num2} = ${num1**num2}`;
        }
    }
    else {
        console.log("Faultness is not-present");
        switch(operation){
            case '+' :
                return ` ${num1} ${operation} ${num2} = ${num1+num2}`;
            case '*' :
                return ` ${num1} ${operation} ${num2} = ${num1*num2}`;
            case '-' :
                return ` ${num1} ${operation} ${num2} = ${num1-num2}`;
            case '/' :
                return ` ${num1} ${operation} ${num2} = ${num1/num2}`;
        }
    }
}

console.log(Calculate(25,5,'+'));