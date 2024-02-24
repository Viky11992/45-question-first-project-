// question no 24:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less 
// than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// answer:
//  Tests for equality and inequality with strings:
// var animal1:string="dog";
// var animal2:string="lion";
// console.log(animal1==animal2);
// var fruite1:string="orenge";
// var fruite2:string="orenge";
// console.log(fruite1==fruite2);
// var vegitable1:string="spunch";
// var vegitable2:string="ladyfinger";
// console.log(vegitable1==vegitable2);
// var country1:string="india";
// var country2:string="india";
// console.log(country1==country2);
// // • Tests using the lower case function:
// var str1 = "mohammad";
// var str2 = "MOhammad";
// console.log(str1 === str2.toLowerCase());
// var name1:string="Shoaib Arshad";
// var name2:string="SHOAIB ARSHAD";
// console.log(name1.toLowerCase()===name2);
// // greater than:
// var num1:number= 20;
// var num2:number= 10;
// console.log(num1>num2);
// var num1:number= 10;
// var num2:number= 20;
// console.log(num1>num2);
// // less than:
// var num1:number= 20;
// var num2:number= 10;
// console.log(num1<num2);
// var num1:number= 10;
// var num2:number= 20;
// console.log(num1<num2);
// // greater than or equal to:
// var num1:number= 21;
// var num2:number= 5;
// console.log(num1>=num2);
// var num1:number= 5;
// var num2:number= 21;
// console.log(num1>=num2);
// // less than or equal to:
// var num1:number= 5;
// var num2:number= 21;
// console.log(num1<=num2);
// var num1:number= 21;
// var num2:number= 5;
// console.log(num1<=num2);
// • Tests using "and" and "or" operators:
// var a = 30;
// var b = 10;
// var c = 5;
// console.log(a > b && b > c);//true
// console.log(a > b || b < c);//true
// console.log(a > b && b < c);//false
// console.log(a < b || b < c);//false
// • Test whether an item is in a array:
var arr = ["rabia", "sarah", "ayesha", "barrera"];
console.log(arr.includes("sarah")); //true
console.log(arr.includes("barrera")); //true
console.log(arr.includes("sadia")); //false
console.log(arr.includes("shiza")); //false
// • Test whether an item is not in a array
var animal = ["dog", "hyna", "lion", "tiger"];
console.log(!animal.includes("lion")); //false
console.log(!animal.includes("tiger")); //false
