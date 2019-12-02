//This sorting algorithm has greater space complexity the longer the integers are
//so it is not a practical algorithm for sorting huge integers

function countingSort(arr, max) {
  if (arr.length <= 1) return arr;
  const result = [];

  const counters = new Array(max + 1).fill(0);

  arr.forEach(ele => {
    counters[ele]++;
  });

  for (let i = 0; i < counters.length; i++) {
    while (counters[i] > 0) {
      result.push(i);
      counters[i]--;
    }
  }

  return result;
}


module.exports = {
    countingSort
};
