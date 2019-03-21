/*
    Mohammed Jamil,Shin Bamba
    SoftDev2 pd6
    K14 -- Learning to Swim
    2019-03-21
*/
/*
  You can see the effect of these functions in the console 
*/
var selection = d3.select("body");
console.log(selection)
var multiplegrps=d3.selectAll("tr").selectAll("td");
console.log(multiplegrps)
d3.selectAll("section").append("p");
d3.select("body").datum(42).append("h1");
console.log(d3.select("body"))
var numbers = [4, 5, 18, 23, 42];
var matrix = [
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15]
];
console.log(numbers)

console.log(matrix)
//d3.selectAll("div").data(numbers);
var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];
console.log(letters)
function name() {
  return this.name;
}
d3.selectAll("div").data(letters, name);
console.log(d3.selectAll("div"))
/*
When printing out the divs after changing the div the one to one merge is not visible
*/
var vowels = [
  {name: "A", frequency: .08167},
  {name: "Y", frequency: .01492},
  {name: "O", frequency: .02780},
  {name: "I", frequency: .04253},
  {name: "E", frequency: .12702}
];
var div = d3.selectAll("div").data(vowels, name);
console.log(div.enter())