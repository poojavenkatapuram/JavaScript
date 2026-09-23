const myArr = [1,2,3,4,5,6];
console.log(myArr[3])
// //shallow copies share the same refernce

// //deep copies share the differetn refernce

const myArr2 = new Array('panipuri', 'biryani', 'chicken');
console.log(myArr2[0]);

// //array methods
myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(3));

const newArr = myArr.join();//convert the array into string
console.log(typeof (newArr));

//slic ,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log(myn1);
console.log(myn2);
//splice manipulates the original array