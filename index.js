module.exports = rbe;

const _ = require('lodash');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const emojis = JSON.parse(readFileSync(resolve(__dirname, 'bbemojis.json'), 'utf8'));

function rbe() {
  return `:${_.sample(emojis)}:`;
}
