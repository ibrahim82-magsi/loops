// JavaScript Loops Assignments
// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.



// let fruits = ["apple", "banana", "cherry"]

// for (let i = 0;i < fruits.length[i]; i ++ ){
//     console.log(fruits[i]);
    
// }




// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.


// let colors = ["red", "green", "blue"]
// let output = document.querySelector("#output")

// for (let i = 0; i < colors.length[i]; i ++){
//     output.innerHTML += colors[i] + "";

// }

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.

// for (let i = 1; i < 10 ; i ++){
//     console.log(i)
// }


// 4. Use a while loop to print numbers from 5 to 1 in the console.

// let number = 5;

// while (number > 0){
//     console.log(number)
//     number--;
// }



// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.


// let names = ["Ali", "Sara", "Ahmed"]

// let space = " ";

// for (let i = 0; i < names.length; i ++){
//     space  += names[i];
//     if (i < names.length - 1){
//         space += " ,";

//     }

//      document.querySelector("#names").innerHTML = space;
// }






// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.


// document.querySelector("#name").innerHTML = "loading......."








// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.


// let numbers = [5, 10, 15];

// let sum = 0;

// let totalSum = document.querySelector("#numbers")

// for (i = 0; i< numbers.length; i++){
//     totalSum.innerHTML = sum += numbers[i];
    
    
        
// }




// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.

// let cities = ["Karachi", "Lahore", "Quetta"];

// let div = document.querySelector("#cities");

// for (let i = 0; i < cities.length; i++){
//     div.innerHTML = cities.join(" ");
// }







// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.


// let i = 1;


// while (i <= 20) {
//     if (i % 2 === 0 ){

//         console.log(i);
        
//     }
//     i++;
    
// }




// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.


// let numbers = [45, 22, 89, 100];
// let max = numbers[0];
// let maxNum = document.querySelector("#max")

// for (let i = 0; i < numbers.length; i ++){
//     if (numbers[i] > max){
//         maxNum.innerHTML = max = numbers[i]
//     }

// }





// 11. Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".



// document.querySelector("#result").innerHTML = "task completed"





// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.


// let temperatures = [30, 35, 32, 40];

// let averageTemp = 0;
// let result = document.querySelector("#averageTemp")


// for (let i = 0; i < temperatures.length; i++){

// result.innerHTML = averageTemp += temperatures[i] / temperatures.length   

//     }










// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.


// let totalSum = document.querySelector("#totalsum")

// sum = 0;

// for (let i =1; i <= 100; i++){
//     totalSum.innerHTML = sum += i 
// };




// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.



// let animals = ["Dog", "Cat", "Bird"]

// let paragraph = document.querySelector("#animals")

// for (let i = 0; i < animals.length; i++){

//     paragraph.innerHTML = animals.join(" ");
// }









// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".


// document.querySelector("#title").innerHTML = "welcome to JavaScript!"








// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.


// let i = 1;

// while (i <= 50) {
//   if ( i % 5 === 0 ){ 
//     console.log(i);

//   }
//    i++;
// }







// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.

// let scores = [80, 60, 90, 70];
// let display = document.querySelector("#highScores")

// for (let i = 0; i < scores.length; i++){
//     if(scores[i] > 75){
//         display.innerHTML += scores[i] + ", ";
//     }
// }


// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.



// document.querySelector("#message").innerHTML = "Updated successfully";





// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.

// let subjects = ["Math", "Science", "English"];
// let subjectsList = document.querySelector("#totalSubject");

// for (let i = 0; i < subjects.length; i++){
//     subjectsList.innerHTML += subjects[i] + " "
// }











// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.



// let numbers = [5, 10, 15, 20];
// let sum = 0;

// let total = document.querySelector("#total");



// for(let i= 10; i >= 1; i --){
//     // console.log(i);
//     numbers.push(i);
//     console.log(numbers);    
// }

// for (let i = 0; i< numbers.length; i++){

//     total.innerHTML = sum += numbers[i];
     
    
    
// }







// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].



// let number  = [45, 67, 12, 89, 34];
// let max = number[0];

// for (let i = 0; i< number.length; i++){
//     if (number[i]> max){
//     max = number[i]    
//     }


// }

// console.log(max);






// 



// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.
















// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].
// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.
// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.
// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.
// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].
// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.
// 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].
// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// .reverse()).
// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.

// 32. Create a loop that finds the difference between the largest and smallest numbers in an
// array [11, 4, 99, 2, 47].
// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.
// 34. Loop through an array of numbers and create a new array that only contains odd
// numbers.
// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.
// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.
// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.
// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// equal to the average of the array.
// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.




//find average of class numbers


// let array = [45, 34, 23, 25, 34, 12, 98, 45];

// let sum = 0;

// for (let totalsum of array){

//     sum += totalsum
    
    

// }

// let average = sum / array.length
// console.log(`the class average sum is ${average}`);


// remove 10 % from items and print - 10 % values

// let items = [800, 600, 343, 399, 500, 300];

// for (let i = 0; i<items.length; i ++){
//     let offer = items[i] / 10;
//     items[i] -= offer

// }
// console.log(items);


// shift removes from start
let fruits = ["apple", "banana", "pomegurnate", "mango", "graps"]

fruits.shift();



// splice   removes and adds or replace


fruits.splice(2, 1, "guava")
    fruits.push("watermelon")

// unshift   adds in the start

fruits.unshift("dragon fruit");
