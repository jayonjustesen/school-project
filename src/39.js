function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = [];
  
  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.push(...item);
    } else {
      seen.add(item);
    }
  });

  return duplicates;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(findDuplicates(array));
