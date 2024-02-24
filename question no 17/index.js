// question no 17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// answer:
var guestList = ["nazia", "nabeela", "faiza", "aqsa"];
guestList.forEach(function (guest) {
    // message:
    console.log("sorry" + " " + guest + " " + "my dinner table just allow only two person only");
});
// removing 2 guset:
while (guestList.length > 2) {
    var removingGuest = guestList.pop();
    // removing guest message
    console.log("sorry" + " " + removingGuest + " " + "you are not invited tonight dinner at my farm house");
}
// remainng guest message:
guestList.forEach(function (remainningGuest) {
    console.log(remainningGuest + " " + "you are still invited");
});
// remainnig guest remove on list:
guestList.pop();
guestList.pop();
// empty guest list finally:
console.log(guestList);
