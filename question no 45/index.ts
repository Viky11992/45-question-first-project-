// question no 45:
// Cars: Write a function that stores information about a car in a Object. The function should always receive a
//  manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
//  with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object
//   that’s returned to make sure all the information was stored correctly.
// answer:
function Makecar(manufacture:string,model:string, ...properties:[string,any][]) {
let car:any={
    manufacture,
    model,

};
for(var [key,value]of properties){
    car[key]=value;
}
return car;
  
}
var myCar:void=Makecar("mercadies","etron",["color","red"],["speed",300]);
console.log(myCar);
