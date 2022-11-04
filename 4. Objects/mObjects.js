"use strict";
exports.__esModule = true;
var User = {
    name: 'hassan',
    active: true
};
function getUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hassan", isPaid: true, email: "hassan@gmail" };
getUser(newUser);
// :{} is the return type
function createCoure() {
    return { name: 'reactjs', price: 13 };
}
