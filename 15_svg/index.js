/*
    Mohammed Jamil
    SoftDev2 pd6
    K15 -- Scattered
    2019-03-22
*/
function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}

d3.csv("scores.csv",type).then(function(data){
  console.log(d3.max)
  var dat=[];
  for(var i=0;i<250;i++ ){
    var datum=[]
    datum.push(data[i]["Average Score (SAT Math)"])
    datum.push(data[i]["Average Score (SAT Reading)"])
    dat.push(datum)
  }
  var margin = {top: 20, right: 15, bottom: 60, left: 60}
  , width = 960 - margin.left - margin.right
  , height = 500 - margin.top - margin.bottom;
  var x = d3.scaleLinear()
  .domain([0, d3.max(dat, function(d) { return d[0]; })])
  .range([ 0, width ]);

  var y = d3.scaleLinear()
  .domain([0, d3.max(dat, function(d) { return d[1]; })])
  .range([ height, 0 ]);

  var chart = d3.select('body')
  .append('svg')
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .attr('class', 'chart')
  
  var desc=d3.select('body').append('p')
  desc.append("text")
  .text("These are Average SAT scores for the math and reading sections for each school in NYC for the 2014-2015 academic year\n")
  
  var source=d3.select('body').append('p')
  source.append("a")
  .attr("href","https://www.kaggle.com/nycopendata/high-schools/version/1")
  .text("Courtesy of NYC Open Data")
  
  var dev=d3.select('body').append("footer")
  dev.append("text")
  .text("Scatterplot by Mohammed Jamil")

  var main = chart.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', width)
  .attr('height', height)
  .attr('class', 'main')
  main.append("text")
  .attr("transform","translate(" + (width/2) + " ," + 0 + ")")
  .style("text-anchor", "middle")
  .text("Average SAT Reading Scores vs. Average SAT Math Scores in NYC Schools");   

  // draw the x axis
  var xAxis = d3.axisBottom()
  .scale(x)

  main.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .attr('class', 'math scores')
  .call(xAxis);

  
  main.append("text")
  .attr("transform","translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
  .style("text-anchor", "middle")
  .text("Average SAT Math scores");
  // draw the y axis
  var yAxis = d3.axisLeft()
  .scale(y)

  main.append("text")
  .attr("transform","translate(" + (margin.left-30) + " ," + (height/2) + ") "+
  "rotate(-90,-60,10)")
  .style("text-anchor", "middle")
  .text("Average SAT Reading scores");

  main.append('g')
  .attr('transform', 'translate(0,0)')
  .attr('class', 'reading scores')
  .call(yAxis);

  var g = main.append("g"); 

  g.selectAll("scatter-dots")
  .data(dat)
  .enter().append("circle")
  .attr("cx", function (d,i) { return x(d[0]); } )
  .attr("cy", function (d) { return y(d[1]); } )
  .attr("r", 4);
});
