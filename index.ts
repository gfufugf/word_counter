#! /usr/bin/env node
// import the "inquirer" module which is a command line interface for node.js
import inquirer from "inquirer"
// Define a constant 'answer' and assign it to the result of inquirer.prompt function
const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
])
const words = answers.sentence.trim().split(" ")
// Print the array of words to the console
console.log(words)
// Print the words count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
