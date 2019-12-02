function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let ele = arr[i];

    let n = i - 1;
    for (; n >= 0 && ele < arr[n]; n--) {
      arr[n + 1] = arr[n];
    }

    arr[n + 1] = ele;
  }

  return arr;
}

module.exports = {
    insertionSort
};
