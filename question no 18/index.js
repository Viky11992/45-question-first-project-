// question no 18:
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// answer:
// store locations in arrey not in alphabetical order:
var places = [
    "makkah,saudi_arab",
    "lahore,pakistan",
    "ajmair,india",
    "las_vegas,america",
    "tokyo,japan"
];
// arrey print in origional order:
console.log(places);
// arrey print in alphabitical order:
var placesCopy = __spreadArray([], places, true);
placesCopy.sort();
console.log(placesCopy);
// still in its original order:
console.log(places);
// reverse alphabetical order:
var reverseAlpha = __spreadArray([], places, true);
reverseAlpha.sort().reverse();
console.log(reverseAlpha);
// arrey print in origional order:
console.log(places);
// Reverse the order of your list.
var reverseOrder = __spreadArray([], places, true);
reverseOrder.reverse();
console.log(reverseOrder);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
var reverseOrderAgain = __spreadArray([], reverseOrder, true);
reverseOrderAgain.reverse();
console.log(reverseOrderAgain);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(places.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places.reverse());
