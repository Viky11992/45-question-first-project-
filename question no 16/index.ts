// question no 16:
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
// answer:
var guestList:string[]=["nazia","nabeela","faiza","aqsa"];
// add guest to bignning:
guestList.unshift("sarah");
// add guest to centre:
guestList.splice(3, 0, "ayesha");
// add guest to the end of arrey
guestList.push("sidrah");
// send message to found bigger dinner table:
guestList.forEach((updateGuest)=>{
    console.log("hello" + " " + updateGuest + " " + "i  found a bigger dinner table, kindly join us at my farmhouse about 10 clock");
})