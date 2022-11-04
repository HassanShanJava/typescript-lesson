"use strict";
exports.__esModule = true;
var greeting;
greeting = 'Hassan';
var num = 4;
console.log(greeting);
// number
// with inference
var userId = 112233;
// userId='Wrong Bro'      //error here
userId.toFixed(2);
console.log(userId);
// boolean
var isLogged = false;
console.log(isLogged);
// any  no good in certain cases, it can cause problems
var hero;
function getHero() {
    return "Hassan"; //return true will give error below
}
hero = getHero();
