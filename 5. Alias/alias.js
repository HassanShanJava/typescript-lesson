"use strict";
exports.__esModule = true;
function createUser(user) {
    console.log(user.name, user.email, user.isActive);
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUser({ name: "Hassan Shan", email: "hassanshan675@gmail.com", isActive: true });
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
