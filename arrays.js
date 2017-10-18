var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newerArray = ['element', ...array];
  return newerArray;
}
/*
function destructivelyAddElementToBeginningOfArray(array, "element"){
  return array = ["element", ...array];
}
*/
