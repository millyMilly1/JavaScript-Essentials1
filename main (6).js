const fibbRec = function(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibbRec(n - 1) + fibbRec(n - 2);
  }
};

console.log(fibbRec(10));