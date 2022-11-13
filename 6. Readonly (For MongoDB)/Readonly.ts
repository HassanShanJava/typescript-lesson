type user={
    readonly _id:string //u cannot change this
    name:string;
    email:string;
    isActive:boolean;
    creaditDetails?:number  //this is optional
}


function createUser(user:user){


}


let myUser:user={
    _id:'123131',
    name:"Hassan Shan",
    email:'hassanshan675@gmail.com',
    isActive:true
}


myUser.email='shan@gmail.com'

// myUser._id=12121;   //not allowed but is for typescript only



type cardNumber={
    carnumber:string,
}
type cardDate={
    cardate:string,
}
type cvv={
    cvv:number,
}



type cardDetails=cardNumber&cardDate&cvv

// type cardDetails=cardNumber&cardDate&{
//     cvc:number
// }

export {}