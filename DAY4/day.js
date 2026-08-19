let name="Sarthak"
console.log(name)
console.log(name.length)
console.log("=== Array ===");

var fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits: " + fruits);

var numbers = [1, 2, 3, 4, 5];
console.log("Numbers: " + numbers);

console.log("==string Array==");
var names = ["John", "Jane", "Mike"];
console.log("Names: " + names);


console.log("=== String methods ===");

let str = "Hello, World!";
console.log("Length of string: " + str.length);

console.log("Uppercase: " + str.toUpperCase());

console.log("Lowercase: " + str.toLowerCase());

console.log("Character at index 7: " + str.charAt(7));

console.log("Substring (0, 5): " + str.substring(0, 5));

console.log("Index of 'World': " + str.indexOf("World"));

let s="Sarthak Srivastava"
console.log(s.length)
let arr=[1,3,4];
console.log(arr.push(2)) 
console.log(arr.slice(0,2))
console.log(s.toUpperCase());
console.log(s.toLowerCase())
console.log(s.slice(1,3))
console.log("Sarthak",s.indexOf("Sarthak"))
console.log("Soumya",s.lastIndexOf("Soumya"))
console.log(s.split())
var a= "String is Good"
console.log(a.includes("good"))
console.log(s.replace("Srivastava",""))//replace the part of string with another 
console.log(s.concat(" Sarthak Srivastava")) //add the value to string and return 
console.log(s.includes("Sarthak")) //check the substring in string or not
//Array object
let arr_obj=[{Name:'Sarthak',Roll:2503215300208},{Name:'Soumya',Roll:2503215300174}]
console.log(arr_obj[0])
console.log(arr.pop())
console.log(arr)
//Shift and Unshift
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(0))
console.log(arr)
//Date
let date = new Date();
console.log(date)
console.log("Year=",date.getFullYear())
console.log("Month",date.getMonth()+1)
console.log("Date",date.getDate())
console.log("Day",date.getDay())



