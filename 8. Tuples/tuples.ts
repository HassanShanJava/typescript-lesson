// what if u want a string, number, and boolean BUT IN PRECISE Order

const user:(string|number|boolean)[]=["hs"] //not good
let tupleUser:[string,number,boolean] //using tuple order is made

tupleUser=[true]//error
tupleUser=["hs",1212,true]

console.log(tupleUser);

// best example
let rgb:[number,number,number] //this type is a reference btw
rgb=[0,0,0]


type Tuser=[number,number,number,string] //fixes length of array


const test:Tuser=[1,2,3, "hshs"]



// but u can change the value,u can restrictit too btw
test[1]=11212



// watch out for this!!!!
// push, pop, shit, unshift, splice
test.push(true) //this is allowed, typescript cant catch tuple array on push method


















export{}