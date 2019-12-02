function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentLowIdx = i;
    for (n = i; n < arr.length; n ++) {
      if (arr[n] < arr[currentLowIdx]) {
        currentLowIdx = n;
      }
    }
    swap(arr, i, currentLowIdx);
  }

  return arr;
}

module.exports = {
    selectionSort,
    swap
};

