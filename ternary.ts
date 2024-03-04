import inquirer from "inquirer";
let ternary_op = await inquirer.prompt({

    type : "input",
    name : "value",
    message : "What do you like to take !"  
});

let isHungry = ternary_op.value;
let snack =isHungry ? "apple" : "water";     // always condtion is true run apple
console.log(`you have some : ${snack}`);
