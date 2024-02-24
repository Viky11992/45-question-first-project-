// question no 31:
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
// non empty array acse:
var users:string[]=["ali","ahmed","momin","erfan"];
users.forEach((user)=>{
    console.log(user+" "+"hello welcome , how are you");
    
})
//empty array acse:
var users:string[]=[];
if(users.length===0){
    console.log("We need to find some users!");
    
}


    
