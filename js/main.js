
// **** Your JavaScript code goes here ****
/*

Name: Komal Hirani
gtID: khirani6
CS 4460 - Coding Assignment #1

*/

d3.csv('./data/coffee_data.csv', function(error, data) {
	if (error) {
		console.error('Error loading coffee sale data');
		console.error(error);
		return;
	}
	
	//console.log(data);
	var salesByRegion = d3.nest()
		.key(function(d) {
			return d.region;
		})
		.rollup(function(v) {
			var totalSales = d3.sum(v, function(d) {
				return d.sales;
			});
			return totalSales;
		})
		.entries(data);

	//console.log(JSON.stringify(salesByRegion));
	console.log(salesByRegion);

});

