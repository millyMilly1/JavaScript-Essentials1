function printConsecutiveIntegers() {
  let count = 1;
  const interval = setInterval(() => {
    console.log(count);

    if (count === 10) {
      clearInterval(interval);
    }

    count++;
  }, 2000); // Two-second interval (2000 milliseconds)
}
 printConsecutiveIntegers();
// Start the program after a two-second delay
//setTimeout(printConsecutiveIntegers, 2000)


let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

