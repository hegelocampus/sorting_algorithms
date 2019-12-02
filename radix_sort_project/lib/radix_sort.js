function getDigitFrom(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getIntLength(num) {
  return (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);
}

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  if (!Array.isArray(arr)) return null;

  let maxDigits = getMaxDigits(arr);
  for (let n = 0; n < maxDigits; n++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let current = getDigitFrom(arr[i], n);
      buckets[current].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

module.exports = {
    radixSort
};

