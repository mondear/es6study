let myIterator = makeIterator(['a', 'b', 'c']);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());


function makeIterator(arr) {
  var index = 0;
  return {
    next() {
      return index < arr.length ?
        {
          value: arr[index++],
          done: true
        } :
        {
          value: undefined,
          done: false
        }
    }
  }
}
