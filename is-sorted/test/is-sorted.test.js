const checkSorted = require ('../index.js')
const fixtures = require('./fixtures')
const comparators = {
  descending:(a,b)=> b - a
}
test('test', () => {
  fixtures.forEach(element => {
    expect(checkSorted(element.array,comparators[element['comparator']])).toBe(element.expected);
  });
});
test('throw error',()=>{
  function getIntArrayWrapFn() {
    checkSorted({})
  }
  expect(getIntArrayWrapFn).toThrow('except Array got object')
})