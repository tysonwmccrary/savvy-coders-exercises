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
var n = 15;
var outputTarget = document.querySelector("#exercise5");
var outputHtml = "<ul>";

while (n > 0) {
    console.log(n);
    if ( n % 2 === 0) {
        outputHtml += "<li>even</li>";
    } else {
        outputHtml += "<li>odd</li>";
    }
    n--;
}

outputHtml = "</ul>";

outputTarget.innerHTML = outputHtml;
