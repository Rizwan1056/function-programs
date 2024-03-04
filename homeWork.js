#! /usr/bin/env node
import inquirer from "inquirer";
const input = await inquirer.prompt([{
        type: "number",
        name: "w8KG",
        message: "Enter total Weight :"
    },
    {
        type: "number",
        name: "h8MT",
        message: "Enter Height :"
    }
]);
let bmi = input.w8KG / (input.h8MT * input.h8MT);
console.log(`your BMI is ${bmi}`);
