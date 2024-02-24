// question no 42:
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
//  the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the
//   list has actually been modified.
// answer:
var megiciansName:string[]=["ahmed","noman","ali","kamran"];
function make_great(megicians:string[]) {
    for(var megic in megicians ){
        console.log("the great"+" "+megicians[megic]);
        

    }
    
}
make_great(megiciansName)