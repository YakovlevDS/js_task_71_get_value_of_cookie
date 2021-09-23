   
// ? Task:Get Value of a brower Cookie


// Solution 1
const cookie = name => `;
 ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"
console.log(cookie("_ga"));

// ! Explanation: Retrieve the value of a cookie by accessing with document.cookie
