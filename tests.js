/* @author Vlad Yakymenko Dp-P05 JS Core */
QUnit.test("Should return sum of afsa54 and true = 55", function( assert ) {
  var result = getSumOf2Numbers('afsa54', true);   
  assert.equal(result, 55, "Passed!" );
});

QUnit.test("Should return biggest from 2, 5, 1 = 5", function( assert ) {
  var result = getBiggest(2, 5, 1);   
  assert.equal(result, 5, "Passed!" );
});

QUnit.test("Should return max value of [1, 55, -22, 1, 2, 67, 1] = 67", function( assert ) {
  var result = getMaxValue([1, 55, -22, 1, 2, 67, 1]);   
  assert.equal(result, 67, "Passed!" );
});

QUnit.test("Should return index of min value ['1', 55, -22, 1, 2, '67', 1] = 2", function( assert ) {
  var result = getIndex(['1', 55, -22, 1, 2, '67', 1]);   
  assert.equal(result, 2, "Passed!" );
});

QUnit.test("Should return copy of [1, 55, -22, 1, 2, 67, 1]", function( assert ) {
  var array = [1, 55, -22, 1, 2, 67, 1],
      result = getCopy(array);   
  assert.deepEqual(result, array, "Passed!" );
});