#! /usr/bin/env node

console.log(chalk.red("=".repeat(60)));
console.log(chalk.yellow ("Welcome to Quiz App - Code with Momina -khan"));
console.log(chalk.red("=".repeat(60)));
import inquirer from "inquirer"
import chalk from "chalk";
 
const quiz:{
    question_1 : string;
    question_2 : string;
    question_3 : string;
    question_4 : string;
    question_5 : string;
} = await inquirer.prompt([
    {
        name:"question_1",
        type:"list",
        message:"What is TypeScript?",
        choices:["A. A subset of JavaScript","B. A typed superset of JavaScript"," C. A new programming language unrelated to JavaScript","D. A framework for building web applications"]
    },

    {
        name:"question_2",
        type:"list",
        message:"Which of the following is a key feature of TypeScript?",
        choices:["A. Dynamic typing","B. No support for OOP","C. Static type-checking","D. Lack of IDE support"]
    },

    {
        name:"question_3",
        type:"list",
        message:"How do you declare a variable with a specific type in TypeScript?",
        choices :["A. let x: number = 10;","B. int x = 10;","C. number x = 10;","D. x: number = 10;"]
    },

    {
        name:"question_4",
        type:"list",
        message:"Which of the following TypeScript types can be assigned to a variable declared with the type any?",
        choices:["A. number","B. string","C. boolean","D. All of the above"]
    },

    {
        name:"question_5",
        type:"list",
        message:"How do you define an interface in TypeScript?",
        choices:["A. interface Person { name: string; age: number; }","B. class Person { name: string; age: number; }","C. type Person = { name: string; age: number; }","D. function Person(name: string, age: number) { }"]
    }
]);

let score :number = 0;

switch(quiz.question_1){
    case " typed superset of JavaScript":
        console.log("B. Correct!");
        ++score;
        break;
        default:
            console.log("B. Incorrect!");

}

switch(quiz.question_2){
    case " C. Static type-checking":
        console.log("C. Correct!");
        ++score;
        break;
        default:
            console.log("C. Incorrect!");

}
switch(quiz.question_3){
    case " let x: number = 10;":
        console.log("A. Correct!");
        ++score;
        break;
        default:
            console.log("A. Incorrect!");

}
switch(quiz.question_4){
    case " All of the above":
        console.log("D. Correct!");
        ++score;
        break;
        default:
            console.log("D. Incorrect!");
}
switch(quiz.question_5){
    case " interface Person { name: string; age: number; }":
        console.log("A. Correct!");
        ++score;
        break;
        default:
            console.log("A. Incorrect!");
}

console.log(`Score : ${score}`);

