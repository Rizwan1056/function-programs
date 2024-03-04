// function add():any{
//     let num1 :number =5;
//     let num2 :number =5;                      // this function has no any argument pass
//     let num3 :number = num1 + num2;
//     console.log(`Addtion is ${num3}`);
// } 
// add();

// function sub (num1:number):number{
//     let num2:number =5;                        // this function ha single argument pass
//     return num1 - num2 ;
// }
// let result = sub(15);
// console.log ("subtraction is :" + result);


// let mul = function (num1 : number, num2 : number): number{
// return num1 * num2 ;  
// }                                               // this function has assign in variable & double argument pass . 
// let value = mul(10,5);
// console.log( "multiplicaion is " + value);


// function div (v1:number =10, v2:number=5){
//     return v1 / v2;                                                // this function has default value assign no argument pass
// } let  result_div = div(); console.log(`result_division ${result_div}`);

// let v2 :number=5;  v2 -= 5;  console.log(v2);
// let v1 :number=5;  v1 += 5;  console.log(v1); 
// let v3 :number=5;  v3 *= 5;  console.log(v3);
// let v4 :number=5;  v4 /= 5;  console.log(v4);

// function restParameter ( val_1 :number, ...val_2:number[] ) {
//     console.log(val_1);
//     console.log(val_2);                 // Rest_Parameter used for  ... it first value assign in varible  &  other values  with [] arraylist
// }
//   restParameter(1,2,3,4,5)

  
// function spreadParameter ( val_1 :number, ...val_2:number[] ) {
//     console.log(val_1);
//     console.log(...val_2);                 // Spread_Parameter used for  ... it first value assign  & other values 2nd without [] arraylist
// }
//   spreadParameter(1,2,3,4,5)
//   spreadParameter(11,22,33,44)


let arrowFunction = (v1 : string , v2 :string):string => {
    return v1 + v2;
};                                                               // arrow function ()=> { } 
let result_display = arrowFunction("Rizwan "," Ahmed");
console.log(result_display)














































