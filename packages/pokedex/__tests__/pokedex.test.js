'use strict';

const pokedex = require('..');
const assert = require('assert').strict;

assert.strictEqual(pokedex(), 'Hello from pokedex');
console.info('pokedex tests passed');
