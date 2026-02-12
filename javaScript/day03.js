// using reduce

//Que 01: Multiply all no of an array

const arr = [2,4,5,6];

let multi = arr.reduce((acc, curr)=>{
    return  acc*curr;
}, 1);

console.log(multi);

// Que 02: count no of char in an array
const a1 = ["hi", "hello"];

const len = a1.reduce((acc, words) =>{
    return acc + words.length;
}, 0);

console.log(len);

//Que 03: arr to object
const a2 = ["a", "b", "c"];

const obj = a2.reduce((acc, char) => {
    acc[char] = true;
    return acc;
}, {});

console.log(obj);

// Que 04: check frequency
const a3 = "hello";

const freq = a3.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});

console.log(freq);

// Que 05 for longest word
const a4 = ["me", "mine", "elephant"];

const lWord = a4.reduce((acc, word) => {
    return acc.length > word.length ? acc : word;
}, "")

console.log(lWord);

// Que 05: group no. into even/odd
const a5 = [1,2,3,4,5,6];

const grp = a5.reduce((acc, num) => {
    if(num % 2 == 0){
        acc.even.push(num);
    }
    else acc.odd.push(num);
    return acc;
}, {odd: [], even: []});

console.log(grp);

// Que 06: group by char
const a6 = ["ans", "bat", "ball", "ace"];

const g1 = a6.reduce((acc, word) => {
    const key = word.charAt(0);
    if(!acc[key]){
        acc[key] = [];
    }
    acc[key].push(word);

    return acc;
}, {});

console.log(g1);

