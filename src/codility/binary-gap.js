const binaryGap = number => {
  let zeroCount = 0;
  let result = 0;
  let binaryForm = number.toString(2);
  for (let digit of binaryForm) {
    if (digit === "0") {
      zeroCount++;
    } else {
      result = Math.max(result, zeroCount);
      zeroCount = 0;
    }
  }
  return result;
};

console.log(binaryGap(9));
