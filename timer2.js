const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'BEEP> '
});

rl.prompt();


rl.on('line', (line) => {
  if (isNaN(line) && line === 'b') {
    process.stdout.write('\x07')
    // console.log('test');
  }
  if (!isNaN(line)) {
    console.log(`"setting timer for ${line} seconds..."`);
    setTimeout(() => {
      process.stdout.write('\x07')
    }, line * 1000);
  }
  rl.prompt();
})

.on('close', () => {
  console.log('Thanks for using me, ciao!');
  process.exit(0);
});


// let time = 0;
// if (time.length !== 0) {
//   for (let x of time) {
//     if (!(Number.isNaN(x) || x < 0)) {
//       setTimeout(() => {
//         process.stdout.write('\x07')
//       }, x);
//     }
//   }
// }
