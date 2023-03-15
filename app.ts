let cl=console.log;
 //INTRO OF TS
let num1 = document.getElementById("num1") as HTMLInputElement;
let num2 = document.getElementById("num2") as HTMLInputElement;
let add = document.getElementById("btb") as HTMLElement;
let num11 = document.getElementById("num11") as HTMLInputElement;
let num22 = document.getElementById("num22") as HTMLInputElement;
let add1 = document.getElementById("btbn") as HTMLElement;
const addition =(n1 :number,n2:number)=>{
    cl(n1+n2)
}
add.addEventListener("click",()=>{
  addition(+num1.value,+num2.value)
})
const multiply =(n1:number,n2:number)=>{
    cl(n1*n2)
}
add1.addEventListener("click",()=>{
multiply(+num11.value, +num22.value)
})

// let x : string = "hello"
// let x : any ;
// x = 123
// x ="hello"





// //OBJECT CREATE 
// custom Object  it is also called alias
//   type personType ={
//     fname : string,
//     lname : string,
//     age : number
//   }

//    let person : personType={
//     fname : "shree",
//     lname : "kg",
//     age : 12
//    }

// cl(person)


// type users ={
//     firstName : string,
//     lastName : string,
//     ages : number[]
        
// }

// let userDetail : users ={
//     firstName : "abc",
//     lastName : "xyz",
//     ages : [12,23,34,45,56]    
// }

// type newUser= {
//     fname :string,
//     lname :string,
//     contact :number,
//     skills :string[]
// }

// let user :newUser={
//     fname :"julyy",
//     lname :"doe",
//     contact :1234567,
//     skills :["html","css","js"]
// }
// cl(user)






//  // TUPELS

// tupels : a fixed length Array

// type perInfo ={
//     fname : string,
//     lname : string,
//     age :number,
//     userRole :[number,string]  // tupels
// }

// let personOne : perInfo ={
//     fname : "jhon",
//     lname : "doe",
//     age :34,
//     userRole :[1,"admin"]
// }


//Union and return function type

// type combinable=(number | string)  //union type

// function  combine(n1:combinable ,n2:combinable){
//     if(typeof n1 ==="number" && typeof n2 ==="number"){
//      return(n1 +n2)
//     }else{
//       return n1.toString() + n2.toString()
//     }
// }

// function  combine(n1:combinable ,n2:combinable,resultCon:'as-string'|'as-number'){
//     let res;
//     if(typeof n1 ==="number" && typeof n2 ==="number"){
//      res =(n1 +n2)
//     }else{
//       res = n1.toString() + n2.toString()
//     }
// }

// cl(combine(12,23,"as-string"))
// cl(combine("23",45,"as-number"))


// function return type 

// function  add(n1:number ,n2:number): number{
//      return(n1 +n2)
// }

// function  add(n1:number ,n2:number): void{
//     cl(n1 +n2)
// }


// function type

// function  add(n1:number ,n2:number): number{
//      return(n1 +n2)
// }

// let add1 :(p:number,p1:number)=>number

// add1 = add
// cl(add1(12,23))


// // let user1 :any
// let user1 : unknown
// let user2 :string

// user1 = 1
// user1 = "user"
// // user1 =true

// // user2 =user1
// if(typeof user1 ==="string"){
//     user2 = user1
//     cl(user2)
// }

