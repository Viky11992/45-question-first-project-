// question no 43:
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
//  magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
//  added to each magician’s name.
// answer:
var megiciansName:string[]=["badar","javed","ali","osama"];
function show_megicians(megicians:string[]){
    megiciansName.forEach((e)=>{
        console.log(e);
        
    })
    
}

console.log("origional megician:");


show_megicians(megiciansName);

function make_great(megicians:string[]) {
    megiciansName.forEach((e)=>{
        console.log(e + " "+"the great");
        
        
    })
}


let greatMegicians:void=make_great(megiciansName);


console.log(greatMegicians);

