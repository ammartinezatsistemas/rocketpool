#!/usr/bin/env node

/**
 * Quickly convert wei to ether
 */

const program = require('commander');
const Units = require('ethereumjs-units');

// Set the command parameters
program
  .version('0.0.1')
  .option('-w, --wei [weiAmount]', 'The amount in wei')
  .parse(process.argv);

console.log(program.wei + ' = ' + Units.convert(program.wei, 'wei', 'ether') + ' ether');
