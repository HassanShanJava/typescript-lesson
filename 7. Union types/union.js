// used when ur not really sure what type ofo data ur gona get and its better than any
var score = 33; //keep it itvery strict
score = 44;
score = "55";
var myName = {
    name: "Hassan Shan",
    id: 123131
};
myName = {
    name: "H Shan",
    id: 141414
};
function getDB(id) {
    // like an api call
    if (typeof id === "string") {
        id = id.toLowerCase();
    }
    else if (typeof id === "number") {
        id = id + 2;
    }
    console.log("your id is:".concat(id));
}
getDB(3);
getDB("ajsQWa");
// Much useful in arrays
var data = [1, 2, 3, "4"]; //error
var data1 = ["1", "2", "3", "4"];
var data2 = [1, 2, 3, "4"]; //error: either ALL numbers or ALL strings
var data3 = [1, 2, 3, "4"]; //now its either number or string
var data4 = [1, 2, 3, "4", true]; //valid
var data5 = [1, 2, 3, "4", true]; //valid, but not good practice
// TYPESCRIPTS GOAL IS NOT TO REMOMVE THE ERROR LINES, BUT TO MAKE TYPES MORE STRICT
// literal assigngment
var pi = 3.14;
pi = 3.145; //error
// literal type example: applicatioon for airoplane
var seatSpot;
seatSpot = "aisle";
// seatSpot="crew"// error
