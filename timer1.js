let input = process.argv.slice(2);
let time = input.map(x => x*1000);
// console.log(time);

if (time.length !== 0) {
  for (let x of time) {
    if (!(Number.isNaN(x) || x < 0)) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, x);
    }
  }
}
