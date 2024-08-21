// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

document.write(`<h1>Upper case/Lower case Letter:</h1><br>`);

var code=+prompt("Enter the code");
document.write(`Code:${code}<br>`);

if(code>=65 && code<=90){
    document.write(` Result :  Upper case letter. <br><hr><br>`);
}
else if(code>=97 && code<=122 ){
    document.write(`Result :  Lower case letter. <br><hr><br>`);
}
else{
    document.write(`Result : Undefined code.<br><hr><br>`);
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal?

// Function to find and display the larger of two integers

    // Prompt user for the first integer
    var num1 = +prompt("Enter the first integer: ");
    // Prompt user for the second integer
    var num2 = +prompt("Enter the second integer: ");

    // Compare the two integers and display the result
    if (num1 > num2) {
        alert("The larger integer is: " + num1);
    }
     else if (num2 > num1) {
        alert("The larger integer is: " + num2);
    } 
    else {
        alert("Both integers are equal.");
    }

    // 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

    document.write(`<h1>Positive/Negative Number:</h1><br>`);

    var num=+prompt("Enter Number(positive/negative) here:");
    document.write(`Number:${num}<br>`);

    if(num>0){
    document.write(`Result:Positive Number.<br><hr><br>`);
    }

    else if(num<0){
        document.write(`Result:Negative Number.<br><hr><br>`);
    }
    else{
        document.write(`Result:It is Zero.<br><hr><br>`);   
    }

    // 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise:

    document.write(`<h1>Vowel(True/false):</h1><br>`);

    var vowel=prompt("Enter vowel below:");
    document.write(`Vowel:${vowel}<br>`);

    if(vowel==="a"|| vowel==="e"|| vowel==="i"|| vowel==="o"|| vowel==="u"){
        document.write(`Result:<b>True</b><br><hr><br>`);
    }
    else{
    document.write(`Result:<b>False</b> <br><hr><br>`);
    }

//     5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


var correct_password="hunzarafiq1"
var password=prompt(" Enter Password");

if(!password){
    alert("Please enter your password");
}

else if(password==correct_password){
    alert(`"Correct!The password you entered matches the original password” `);
}
else{
    alert(`“Incorrect password”`);
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
document.write(`<h1>Greeting with Changing Hours:</h1><br>`);

var greeting;
var hour = +prompt('Enter Hour here');

if (hour < 18) {
greeting =  "<b>Good Day!</b>";
document.write(`Greeting : ${greeting}<br><hr><br>`);
}
else{
greeting = "<b>Good Evening!<b/>";
document.write(`Greeting : ${greeting}<br><hr><br>`);

}
// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

document.write(`<h1>24 hours clock format :</h1><br>`);
var time =1900;
var enter_time=+prompt("Enter 24 hour clock formate time");
document.write(`"Hours: <b>${enter_time}</b><br>"`);

if(enter_time>=0 && enter_time<1200){
    document.write(` Greeting : <b>"Good Morning!"</b>`);
}
else if(enter_time>=1200 && enter_time<1700){
    document.write(`  Greeting :<b>"Good Afternoon!"</b>`);
}
else if(enter_time>=1700 && enter_time<2100){
    document.write(`  Greeting :<b>"Good Evening!"</b>`);
}
else if(enter_time>=2100 && enter_time<2359){
    document.write(`  Greeting :<b>"Good Afternoon!"</b>`);
}
else{
    document.write(`  Error : <b>"Enter correct Timing!"</b>`);
}
