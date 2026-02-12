// que 01 Reverse a string
let name = "Anurag";
let newName = "";
for(var i=name.length-1; i>=0; i--){
    newName += name[i];
}
console.log(newName);

// que 02  check a palindrome
function palindrome(a){
    var i = 0;
    var j = a.length - 1;
    while(i < j){
        if(a[i].toLowerCase() !== a[j].toLowerCase())   return false;
        i++;
        j--;
    }
    return true;
}

let str = "Madam";
let isPlaindrome = palindrome(str);
console.log(isPlaindrome);

// que 03 find max in an array

const arr = [2,4,5,6,1,8];
let max = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] > max)    max = arr[i];
}
console.log("Maximum no. in arr: "+ {max});
