// question no 3:
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// answer:
// to upper case:
var name1 = "Shoaib arshad";
var upperCase = name1.toUpperCase();
console.log(upperCase);
// to lowerCase
var name1 = "Shoaib arshad";
var lowerCase = name1.toLowerCase();
console.log(lowerCase);
// to titleCase
var name2 = "shoaib arshad";
var titlecaseNmae2 = name2.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log(titlecaseNmae2);
