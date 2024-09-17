//            //////question No. 01/////



// let char = prompt("Enter a character: ");

// let asciiCode = char.charCodeAt(0);


// if (asciiCode >= 48 && asciiCode <= 57) {
//   alert(char + " is a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//   alert(char + " is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//   alert(char + " is a lowercase letter.");
//   alert(char + " is a special character.");
// }


//      /////////QUESTIO NO, 02/////////////


// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));


// if (num1 > num2) {
//   alert(num1 + " is larger.");
// } else if (num1 < num2) {
//   alert(num2 + " is larger.");
// } else {
//   alert("Both integers are equal.");
// }

//     ///////QUESTION NO. 03/////////

// let num = parseFloat(prompt("Enter a number:"));


// if (num > 0) {
//   alert(num + " is a positive number.");
// } else if (num < 0) {
//   alert(num + " is a negative number.");
// } else {
//   alert(num + " is zero.");
// }
    


//        ///////QUESTION NO. 03/////////// 

// let 
//  c = prompt("Enter a character: ");


// if (c.length !== 1) {
//   alert("Please enter a single character.");
// } else {
//   let isVowel = "aeiouAEIOU".includes(c);
//   alert(isVowel ? c + " is a vowel." : c + " is not a vowel.");
// }


//        //////QUESTION NO. 05//////////


// let correctPassword = "secret";


// let userPassword = prompt("Enter your password:");


// if (userPassword === "") {
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }

//         //////////QUESTION NO. 06/////

//         var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }



// javascript
// var greeting;
// var hour = 13;
// greeting = (hour < 18) ? "Good day" : "Good evening";


    //////////QUESTION NO. 07////////


    
let time = parseInt(prompt("Enter time in 24-hour format (HHMM):"));


let hours = Math.floor(time / 100);


if (hours >= 6 && hours < 12) {
  alert("Good night!");
} else if (hours >= 12 && hours < 18) {
  alert("Good afternoon!");
} else if (hours >= 18 && hours < 22) {
  alert("Good evening!");
} else if (hours >= 22 || hours < 6) {
  alert("Good night!");
} else {
  alert("Invalid time!");
}

