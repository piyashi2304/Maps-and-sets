// Ans of ques 1
let ques1=document.getElementById("q1")
let str="abcadeecfb";
let ans = new Set (str);
console.log(ans)
ans = [...ans];
console.log (ans)
ans = ans.join("")
console.log (ans)
q1.innerText = ans;

// Ans of ques 2
// let ques2 = document.getElementById("q2")
// let str1 = "abcadeecfb";
// let ans1 = { };
// for(let char of str)
// if(ans1[char]){
//     ans1[char]++;
// }
// else{
//     ans1[char] = 1;
// }
// console.log(ans1)
// for(let char in ans1)
// console.log(`${char} = ${ans1[char]}`)

let ques2=document.getElementById("q2")
let str1="abcadeecfb"
let ans1 = new Map();
for(let char of str1){
    if(ans1.has(char)){
        ans1.set(char, ans1.get(char)+1)
        // console.log(ans1)
    }
    else{
        ans1.set(char , 1)
        // console.log(ans1)
    }
}
    for(let [key,value] of ans1){
        let result=`${key} = ${value}`;
        console.log(result);
    ques2.textContent += result + "\n";
    }

