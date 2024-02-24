// // question no 33:
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th,
//  except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should
//  read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// answer:
var num:number[]=[1,2,3,4,5,6,7,8,9];
num.forEach((numbers)=>{
    var ordinol:string="";
    if(numbers===1){
        ordinol="st";
    }
    if(numbers===2){
        ordinol="nd";
    }
    if(numbers===3){
        ordinol="rd";
    }
    if(numbers===4){
        ordinol="th";
    }
    if(numbers===5){
        ordinol="th";
    }
    if(numbers===6){
        ordinol="th";
    }
    if(numbers===7){
        ordinol="th";
    }
    if(numbers===8){
        ordinol="th";
    }
    if(numbers===9){
        ordinol="th";
    }
    console.log(`${numbers}${ordinol}`);
    
})
