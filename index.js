module.exports = rbe;

const _ = require('lodash');
const { readFileSync } = require('fs');
const emojis = JSON.parse(readFileSync('bbemojis.json', 'utf8'));

function rbe() {
  return `:${emojis[_.round(_.random(0, emojis.length, true))]}:`;
}
