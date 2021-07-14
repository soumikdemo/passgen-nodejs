const program = require('commander') 
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const log = console.log

program.version('1.0.0').description('Simple Password Generator')

program
    .option('--l, --length <number>', 'length of password', 8)
    .option('--s, --save', 'save password to passwords.txt', false)
    .option('--nn, --no-numbers', 'no numbers in password')
    .option('--ns, --no-symbols', 'no symbols in password')
    .parse()

const { length, save, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file 
if(save){
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.green('Password copied to clipboard'))








/* console.log( length, save, numbers, symbols) */

/* Command and Action
program.command('gen').action(() => {
    console.log('generated.')
}).parse() */

/* Array of arrguments from CLI
console.log(process.argv) */
