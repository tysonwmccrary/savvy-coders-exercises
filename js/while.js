<!--Exercise 1-->
// var n =1;
//
// while (n <= 10) {
// console.log(n);
// n++;
// }
<!--Exercise 2-->
// var n = 2;
//
// while (n <= 20) {
//     console.log(n);
//     n += 2;
//   }
<!--Exercise 3-->
// var n = 100;
// var i = 1;
// var sum = 0;
//
// while (i < n) {
//     sum += i;
//     console.log(sum);
//     i++;
// }
<!--Exercise 4-->
// var n = 1;
// var outputTarget = document.querySelector("#exercise1");
// var outputHtml = "<ul>";
//
// while (n <= 10) {
//     console.log(n);
//     outputHtml += "<li>" + n + "</li>";
//     n++;
// }
//
// outputHtml += "</ul>";
//
// outputTarget.innerHTML = outputHtml;
<!--Exercise 5-->
// var n = 15;
// var outputTarget = document.querySelector("#exercise5");
// var outputHtml = "<ul>";
//
// while (n > 0) {
//     console.log(n);
//     if ( n % 2 === 0) {
//         outputHtml += "<li>even</li>";
//     } else {
//         outputHtml += "<li>odd</li>";
//     }
//     n--;
// }
//
// outputHtml = "</ul>";
//
// outputTarget.innerHTML = outputHtml;

<!--Rock, Paper, Sissors-->

￼var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");

var rng = Math.random();
 var computerChoice = "R";
 if(rng > 0.66) {
     computerChoice = "P";
 } else if (rng > 0.33) {
     computerChoice = "S";
}

var userWins = "You win!";
 var computerWins = "The computer wins!";
 if(computerChoice !== userChoice){
     if(computerChoice === "R"){
         if (userChoice === "S") {
             alert(computerWins);
         } else {
             alert(userWins);
         }
     } else if (computerChoice === "P") {
         if( userChoice === "R") {
             alert(computerWins);
         } else {
             alert(userWins);
}
} else {
         if( userChoice === "P") {
             alert(computerWins);
         } else {
             alert(userWins);
} 
 } else {
     alert('Tie!');
}
