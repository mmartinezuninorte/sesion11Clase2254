const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

(async () => {
  try {
    const content = await readFile('./prueba.txt', 'utf-8');
    console.log(content);
  } catch (err) {
    console.error(err);
  }
})();

console.log('Program Ended');