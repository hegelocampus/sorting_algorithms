function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  return array;
}

function bubbleSort(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    array.forEach((ele, i) => {
      if (ele > array[i + 1]) {
        sorted = false;
        swap(array, i, i + 1);
      }
    });
  }

  return array;
}


module.exports = {
    bubbleSort,
    swap
};
