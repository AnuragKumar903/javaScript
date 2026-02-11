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
