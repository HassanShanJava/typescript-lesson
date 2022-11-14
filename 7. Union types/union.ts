// used when ur not really sure what type ofo data ur gona get and its better than any

let score:number | string=33; //keep it itvery strict


score=44;
score="55";



type User={
    name:string;
    id:number
}
type Admin={
    name:string;
    id:number
}


let myName:User|Admin={
    name:"Hassan Shan",
    id:123131
}

myName={
    name:"H Shan",
    id:141414
}


function getDB(id:number|string){
    // like an api call

    if(typeof id==="string"){
        id=id.toLowerCase()
    }else if(typeof id ==="number"){
        id=id+2
    }


    console.log(`your id is:${id}`);
}

getDB(3);
getDB("ajsQWa");


// Much useful in arrays


const data:number[]=[1,2,3,"4"] //error
const data1:string[]=["1","2","3","4"] 
const data2:string[] | number[]=[1,2,3,"4"] //error: either ALL numbers or ALL strings
const data3:(string | number)[]=[1,2,3,"4"] //now its either number or string
const data4:(string | number| boolean)[]=[1,2,3,"4", true] //valid
const data5:any[]=[1,2,3,"4", true] //valid, but not good practice



// TYPESCRIPTS GOAL IS NOT TO REMOMVE THE ERROR LINES, BUT TO MAKE TYPES MORE STRICT

// literal assigngment
let pi:3.14=3.14

pi=3.145 //error



// literal type example: applicatioon for airoplane
let seatSpot:"aisle"|"middle"|"window"

seatSpot="aisle"
// seatSpot="crew"// error
