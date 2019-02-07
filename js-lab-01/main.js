"use strict";

let name1 = prompt("What is the 1st person's name?");
let name2 = prompt("What is the 2nd person's name?");
let name3 = prompt("What is the 3rd person's name?");


if (name1.length === name2.length && name1.length === name3.length) {
    console.log(`All three names, ${name1}, ${name2},
    and ${name3}, are the same length`);

} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log(`${name1} and ${name2} tie for the longest
    name.`);   
    
} else if (name2.length === name3.length && name1.length < name2.length) {
    console.log(`${name2} and ${name3} tie for the longest
    name.`); 
   
} else if (name1.length === name3.length && name2.length < name1.length) {
    console.log(`${name1} and ${name3} tie for the longest
    name.`);     
    
} else if (name1.length > name2.length && name1.length > name3.length) {
        console.log(`${name1} has the longer name!`);    

} else if (name2.length > name3.length) {
    console.log(`${name2} has the longer name!`);

} else {
    console.log(`${name3} has the longer name!`);
}
