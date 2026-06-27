const name="rishita"
let value=50
// value=20

console.log(name + value+ "helloooooo");
console.log("hehe" + "wow");

console.log('hello my name is ${name} and its value is ${value}');
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(1));
console.log(name.indexOf('i'));
console.log(name.trimEnd());

// const newName = name.substring(0,5)
// console.log(newName);

const newString = name.slice(-8,4)
console.log(newString);

const Nme = "  siya    "
console.log(Nme.trim());//extra space htt jayegi

const rishi = "rishita gaula"
console.log(rishi.replace(' ', '._.'));
console.log(rishi.includes('gaula'));
console.log(name.split(' '));// iski wjh se ek array mein aajayega jaha jaha bhi space hoga wo sare element
console.log(name.bold());
