module.exports = rbe;

const _ = require('lodash');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const emojis = JSON.parse(readFileSync(resolve(__dirname, 'bbemojis.json'), 'utf8'));

const emojisByTypes = {
  init: 'tada',
  feat: 'sparkles',
  fix: 'beetle',
  docs: 'pencil',
  style: 'art',
  refactor: 'cyclone',
  perf: 'zap',
  test: 'white_check_mark',
  chore: 'nut_and_bolt',
  review: 'people_with_bunny_ears_partying',
  release: 'package'
};

function rbe() {
  const type = process.argv[2];
  const emoji = _.get(emojisByTypes, type, _.sample(emojis));

  return `:${emoji}:`;
}
