var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, "element"){
  newArray = ["element", ...array]
  return newArray;
}
/*
function destructivelyAddElementToBeginningOfArray(array, "element"){
  return array = ["element", ...array];
}
*/
