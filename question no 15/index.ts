// question no 15:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set
//  of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// answer:
var guestList:string[]=["nazia","nabeela","faiza","aqsa"];
guestList.forEach((guest)=>{
    console.log("hello"+" "+guest+" "+"i am inviting you to a very delecious dinner at my farmhouse about 10 clock");
    console.log("hello"+" "+guest+" "+"sorry about"+" "+guestList[3]+" "+"cant make the dinner tonight");
})

    // replace person:
    var newGuest:string=guestList[3]="ayesha";
    // second set of invitation messages:
    guestList.forEach((updateguest)=>{
        console.log("hello"+" "+updateguest+" "+"i am inviting you to a very delecious dinner at my farmhouse about 10 clock");

})