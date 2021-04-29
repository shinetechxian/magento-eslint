const { spawn } = require('child_process');
const type = process.argv[2];
const dir = process.argv[3];
let ls, fa;
if (type === 'lint') {
  ls = spawn('./node_modules/.bin/eslint', [dir, '--config=.eslintrc-es5.js']);
  ls.stdout.on('data', (data) => {
    console.log(`${data}`)
  });
}
if (type === 'fix') {
  ls = spawn('./node_modules/.bin/eslint', [dir, '--config=.eslintrc-es5.js', '--fix']);
  ls.stdout.on('data', (data) => {
    console.log(`${data}`)
  });
}