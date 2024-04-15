#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \tWelcome to Coin Convert Pro - CLI Currency Convertor\n"));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
    "NZD": 1.72,
    "INR": 67.5,
    "SGD": 1.35,
    "GBP": 0.85,
    "CHF": 1.15, // Swiss Franc
    // Add more currencies and their exchange rates here
};
// Promt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("From which currency do you want to convert?"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "NZD", "INR", "SGD", "GBP", "CHF"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "NZD", "INR", "SGD", "GBP", "CHF"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellow("Enter the amount you want to convert:"),
    }
]);
// Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion 
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`\n Converted amount = ${chalk.green(converted_amount.toFixed(2))}\n`);
