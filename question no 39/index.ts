// question no 39:
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:

// "Lahore, Pakistan":
// answer:
function name_country(city:string,country:string):string {
    return `${city},${country}`
}
console.log(name_country("lahore","pakistan"));
console.log(name_country("bakku","azarbaijan"));
console.log(name_country("colombo","srilanka"));
