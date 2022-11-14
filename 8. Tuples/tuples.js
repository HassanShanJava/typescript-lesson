"use strict";
// what if u want a string, number, and boolean BUT IN PRECISE Order
exports.__esModule = true;
var user = ["hs"]; //not good
var tupleUser; //using tuple order is made
tupleUser = [true]; //error
tupleUser = ["hs", 1212, true];
console.log(tupleUser);
// best example
var rgb; //this type is a reference btw
rgb = [0, 0, 0];
var test = [1, 2, 3, "hshs"];
// but u can change the value,u can restrictit too btw
test[1] = 11212;
// watch out for this!!!!
// push, pop, shit, unshift, splice
test.push(true); //this is allowed, typescript cant catch tuple array on push method
