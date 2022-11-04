let greeting:string;
greeting='Hassan'


let num:number=4;


console.log(greeting);



// number

// with inference
let userId=112233;

// userId='Wrong Bro'      //error here

userId.toFixed(2)
console.log(userId);


// boolean
let isLogged:boolean=false;
console.log(isLogged);


// any  no good in certain cases, it can cause problems, ANY IS MENT TO AVOID TYPECHECKING
let hero:string;

function getHero(){
    // functions can be stricter too, with more checkscd

    return "Hassan"  //return true will give error below
}

hero=getHero()

// onImplicitAny is used to tsconfing to avoid any typechecking



export{};