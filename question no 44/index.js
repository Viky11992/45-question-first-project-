// question no 44:
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The 
// function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three 
// times, using a different number of arguments each time.
// answer:
function Makesandwhich() {
    var demand = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        demand[_i] = arguments[_i];
    }
    if (demand.length == 0) {
        console.log("your order list is empty plz fill them and enjoy a tasty sendwich");
    }
    else {
        demand.forEach(function (index, demand) { return [
            console.log(index + 1, demand)
        ]; });
    }
}
Makesandwhich("tomoto", "chille", "garlic");
Makesandwhich();
Makesandwhich("fruity", "chillie source", "chrunchy");
Makesandwhich("pinapple", "honey", "creamy");
