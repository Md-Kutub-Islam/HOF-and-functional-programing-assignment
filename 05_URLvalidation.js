// 5.Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.


function isValidURL(url) {
    const regex = /^(https?:\/\/)[\w\d\s./-]+$/i;
    return regex.test(url);
}
  
const inputURL = 'https://google.com';

if (isValidURL(inputURL)) {
    console.log('Input URL is valid.');
} 
else {
    console.log('Input URL is invalid.');
}
