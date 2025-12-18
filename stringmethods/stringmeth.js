//string methods-- length,trim,replace,stratswith..,index,changing case,

let str1="helloworld";
console.log(str1.length);

console.log(str1.at(-3));
console.log(str1.charAt(2));

console.log(str1.slice(2,4)); //similar to the substring
console.log(str1.substring(4)); //make a new string from the string
console.log(str1.indexOf("l")); //find the index of the letter
console.log(str1.lastIndexOf("l")); //last index of that letter
console.log(str1.includes("us")); //checks whether the string include
console.log(str1.startsWith("he"));
console.log(str1.endsWith("ld"));
console.log(str1.replace("l","p")); //used to replace the sepcific letter at first
console.log(str1.replaceAll("l", "p"));//replace all the letter
console.log(str1.concat("hihi"));


let str2="   hello world   ";
console.log(str2.trim()); //clears the whitespace
console.log(str2.trimStart());
console.log(str2.trimEnd());

console.log(str1.repeat(3));
console.log(str1.split(" "));

let str3="john";
console.log(str1.padStart(10,"werty"));
console.log(str1.padEnd(10, "werty"));

//1.convert"hello world" into "Hello World"
let str4="hello world";
console.log(str4.charAt(0).touppercase(),str4.charAt(6).toupper());


//2.write a function that returns the number of words in " I love javascript"
let str7="I love javascript";
console.log(str7.split(" ").length());

//.convert "my name is john" to "my-name-is-john"
let str8="my name is john";
console.log(str8.replaceAll(" ", "-"));

//4.from "programming" print duplicate characters (like r,g,m).
let str9="programming";
let freq={};
for(let char in str9){
    if(freq[char]){
        freq[char]++;
    }
    else{
        freq[char]=1;
    }
}
for(let char in freq){
    if(freq[char]>1){
        console.log(char);
    }
}

//5.from john doe smith return jds
let str10="john doe smith";
let word=str10.split(" ");
let initial="";
for(let w of word){
    initial+=w.charAt(0);
}
console.log(initial);

// 6.find the longest word in the sentence ip:"the quick brown fox" op:"quick"
let str11="the quick brown fox";
let words=str11.split(" ");
let lw="";
for(let w of words){
    if(w.length>lw.length){
        lw=w;
    }
}
console.log(lw);








 
