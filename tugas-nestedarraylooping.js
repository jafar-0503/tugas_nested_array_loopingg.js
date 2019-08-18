function panggilNestedArray(value){

  console.log(value[0][0], value[1][0], value[2][0]);
  console.log(value[0][1], value[1][1], value[2][1]);
  console.log(value[0][2], value[1][2], value[2][2]);
  console.log(value[0][3], value[1][3], value[2][3]);
}
var nestedArray = [
  [1,2,3,4],
  ["mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"]
]
panggilNestedArray(nestedArray);
