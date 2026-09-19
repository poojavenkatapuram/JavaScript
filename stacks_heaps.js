//stack , heap
let myfavFood = "panipuri";
let tejafav = myfavFood;
tejafav= "maggi";

console.log(myfavFood);
console.log(tejafav);

// stacks is mainly used in primitive datatypes
//where we will work with the copies so here original 
//copy is not effected;

//example of heap 
let user = {
    email: "user@google.com",
    upi: "user@ybl"
}
let usertwo = user;

usertwo.email = "pooja@google.com"

console.log(user.email);
console.log(usertwo.email);

//heaps are mainly used in non primitive datatypes
//here we will directly deal with the reference. we will
//directly deal with the original value so the changes are
//direclty applied to the original value


