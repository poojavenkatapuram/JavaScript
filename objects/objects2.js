//we can define objects in two types singelton and non singleton
//const tinderUser = new Object();//singleton
const tinderUser = {} // non singleton

tinderUser.id = "123abc";
tinderUser.name = "dhara";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
         firstname: "pooja",
         lastname: "venkatapuram"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

const oobj3 =Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2};// this is the main method which will combine both
console.log(obj3);
console.log(oobj3);


const users = [
    {
        id: 1,
        email: "p@gmail.com",
    },
    {
        id:2,
        email: "a@gmail.com",
    },
]
users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

