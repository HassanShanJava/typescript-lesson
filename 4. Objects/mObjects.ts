const User={
    name:'hassan',
    active:true,
}


function getUser({name:string, isPaid:boolean}){}


let newUser={name:"hassan",isPaid:true,email:"hassan@gmail"}


getUser(newUser)



// :{} is the return type
function createCoure():{name:string, price:number}{
    return {name:'reactjs',price:13}
}













export {};