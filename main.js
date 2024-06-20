#! /usr/bin/emv node
import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "welcome Ronet kumar"
    },
    {
        type: "number",
        name: "pinCode",
        message: "enter your 4 digits pin"
    },
    {
        type: "list",
        name: "account type",
        message: "select ypur account type",
        choices: ["current", "saving"]
    },
    {
        type: "list",
        name: "transitiontype",
        message: "select your transition type",
        choices: ["cash", "withdrawl"]
    },
    {
        type: "list",
        name: "amount",
        message: "select your amount",
        choices: [1000, 2000, 5000, 10000],
        when(user) {
            return user.transitiontype === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount",
        when(user) {
            return user.transitiontype === "withdrawl";
        }
    }
]);
if (user.pincode) {
    const balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    const enteramount = user.account;
    if (enteramount <= balance) {
        const remaining = balance - enteramount;
        console.log(`you have withdrawl rupess ${enteramount} and you have remaining balance ${remaining}`);
    }
}
