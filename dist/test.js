#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter your first number",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter your second number",
    },
    {
        name: "Operator",
        type: "list",
        message: "Select Operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answers)
if (answers.Operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.Operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.Operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.Operation === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Kindly Enter Valid Operator ");
}
