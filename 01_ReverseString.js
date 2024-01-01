// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

function reverseString(str){
    let reverse = ''

    for(let i=str.length-1; i>=0; i--){
        reverse += str.charAt(i)
    }

    return reverse
}


const input = "Hello Pw Skills"

setTimeout(() => {
    const call = reverseString(input)
    console.log(`Reverse String: ${call}`);
  }, 2000);