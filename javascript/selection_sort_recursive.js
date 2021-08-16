function selectionSortRecursive(arr) {
  // type your code here
  if(arr.length <= 1){
    return arr
  } else {

    let min = Math.min(...arr)

    let index = arr.indexOf(min)

    arr.splice(index, 1)

    selectionSortRecursive(arr)

    arr.unshift(min)

    return arr
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("Expecting: [-12, 4, 78, 209]");
  console.log("=>", selectionSortRecursive([78, 209, -12, 4]));

  console.log("Expecting: [-86, 7, 22, 147]");
  console.log("=>", selectionSortRecursive([22, 147, -86, 7]));
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
