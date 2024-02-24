// question no 41:
// Magicians: Make a array of magician’s names. Pass the array to a
//  function called show_magicians(), which prints the name of each magician 
//  in the array.
// answer:
var megiciansName:string[]=["badar","javed","ali","osama"];
function show_magicians(megicions:string[]) {
    for(var megic in megicions){
        console.log(megiciansName[megic]);
    }
}
show_magicians(megiciansName);