//singleton
//Object.create
//object literals
//data is stored in the form of key and objects

const mySym = Symbol("key1");
const Jsuser = {
    name: "pooja",
    "fullname" : "poojavenkatapuram",
    [mySym] : "mykey1",//important
    age: 21,
    location: "Hyderabad",
    email: "pooja@microsoft.com",
    isLoggedIn: false,


}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["fullname"]);
console.log(Jsuser[mySym]);
//to change something
Jsuser.email= "pooja@google.com";

console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(Jsuser.greetingTwo());
