var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray('oldArray', 'element'){
  var newArray = ['${element}', ...oldArray];
  return newArray;
}
/*
function destructivelyAddElementToBeginningOfArray(array, "element"){
  return array = ["element", ...array];
}
*/
