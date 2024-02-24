// question no 21:
// They think of something you could store in a TypeScript Object. Write a program that creates Objects
//  containing these items.
// answer:
var islamicCountries:{[name:string]:{population:number;capital:string;language:string;continant:string;}}={
    "pakistan": { population: 245199937, capital: "islamabad", language: "urdu", continant: "asia" },
    "saudi_arab": { population: 32813871, capital: "riyadh", language: "arabic", continant: "asia" },
    "indonesia": { population: 296361783, capital: "jakarta", language: "Indonesian", continant: "asia" },
    "Egypt": { population: 104258327, capital: "Cairo", language: "Arabic", continant: "asia" },
    "Turkey": { population: 84966961, capital: "Ankara", language: "turkesh", continant: "Asia and Europe." }
};
console.log(islamicCountries);