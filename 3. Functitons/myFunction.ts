function add(num:number){
    // num.toUppercase()  //noto accepting error
    return num+2;

    // return "sup" possible, now you'll learn how to return correctly

}

function getUppercase(val:string){
    return val.toUpperCase()
}



function signUp(signup:string,email:string,password:string,isPad:boolean){


}


let SignIN=(email:string,password:string,isPaid:boolean=false)=>{}


signUp('Hassan',"hasasm@email.com",'hs2232000121',true)

SignIN('hasan@emial.com',"hasdasdasd")

add(2)
getUppercase('Hassan')


// function getValue(val):boolean{
//     if(val>5){
//         return true
//     }
//     return 'sup'
// }

const getHello=(val:string):string=>{
    return ''
}


const heros=['thor','iron']
// const heros=[2,1]


heros.map((hero):string=>{
    return `hero is ${hero}`
})



function consoleLog(err:string):void{
    console.log(err);
    
    
    // return 1
}


// never observerd,
function hanldeLog(err:string):never{
    throw new Error(err)
}

export {}
