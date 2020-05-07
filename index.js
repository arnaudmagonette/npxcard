#!/usr/bin/env node
/* mago320/npxcard
 *
 * /index.js - Main Entry point
 *
 * coded by Arnaud Magonette
 * refactored at 07/05/2020
 */

const chalk = require("chalk");
const boxen = require("boxen");


// Text + chalk definitions
const data = {
    name: chalk.white.bold("             Arnaud Magonette"),
    handle: chalk.white("mago"),
    email: chalk.cyan("arnaud.magonette@gmail.com"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~mago320"),
    github: chalk.gray("https://github.com/") + chalk.green("arnaudmagonette"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arnaudmagonette"),
    npx: chalk.red("npx") + " " + chalk.white("mago"),
    labelEmail: chalk.white.bold("      Email:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelEmail} ${data.email}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "singleDouble",
                borderColor: "#00ffbd",
                float: "center",
                backgroundColor: "#1E1E1E",
            },
        ),
    ),
);