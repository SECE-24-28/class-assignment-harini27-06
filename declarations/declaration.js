//var,let and const
console.log(a); //error undefined
var a=10;
//var b="a";
//a=20;
//console.log("a",a);
//console.log("b",b);

//let
console.log(c);//refference error
let c=10;
c=20;
//let c=30;
//console.log("c",c);

//const
const d=10;
d=20;
//const d=30; (error)
console.log("d", d);


let person={
    fname:"harry",
    lname:"potter",
    age:19,
    address:{
        city:"london",
        country:"uk"
    }
};
const{fname,lname,age,address}=person;
const {city,country}=person.address;

//console.log(person.fname);
//console.log(person.address.city);
console.log(fname);
console.log(city);
console.log(age);


