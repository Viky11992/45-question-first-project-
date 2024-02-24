// question no 3:
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// answer:
// to upper case:
var name1:string="Shoaib arshad";
var upperCase:string=name1.toUpperCase();
console.log(upperCase);
// to lowerCase
var name1:string="Shoaib arshad";
var lowerCase:string=name1.toLowerCase();
console.log(lowerCase);
// to titleCase
var name2:string="shoaib arshad";
var titlecaseNmae2:string=name2.replace(/\b\w/g, c=>c.toUpperCase())

console.log(titlecaseNmae2);


