/* 

Written by @fegul.
If you're reading this, you're a geek too. Awesome.

*/

//Set global defaults
Chart.defaults.global.responsive = true;

//Import growth chart

var importGrowthData = {
	labels: ["1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"],
	datasets: [
	{
		label: "Imports per Year",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [20829, 24969, 29538, 27283, 33421, 36338, 47762, 51672, 41793, 46226, 120971, 119004, 118788, 131358, 143050, 150925, 160015]
	}
	]
};

var importGrowthOptions = {
	scaleShowGridLines : false,
	scaleFontColor: "#fff",
	scaleShowLabels : false,
	maintainAspectRatio: false
};


var importGrowth = document.getElementById("import-growth").getContext("2d");
var importGrowthChart = new Chart(importGrowth).Line(importGrowthData, importGrowthOptions);

//Popular HS Codes

var popularHSCodeData = {
	labels: ["40169300", "73181500", "87089900", "39269090", "84818000"],
	datasets: [
	{
		label: "Most frequently imported",
		fillColor: "rgba(0,0,0,0.2)",
		strokeColor: "rgba(0,0,0,0.3)",
		data: [1811, 1208, 1125, 953, 929]
	}
	]
};

var popularHSCodeOptions = {
	scaleShowGridLines : false,
	scaleFontColor: "rgba(0,0,0,0.4)",
	maintainAspectRatio: false
};


var popularHSCode = document.getElementById("popularHSCodes").getContext("2d");
var popularHSCodeChart = new Chart(popularHSCode).Bar(popularHSCodeData, popularHSCodeOptions);

// Origin countries

var originChartData = [
{
	value: 43975,
	color:"rgba(255,255,255,1)",
	highlight: "rgba(0,0,0,0.5)",
	label: "China"
},
{
	value: 13152,
	color: "rgba(255,255,255,0.83)",
	highlight: "rgba(0,0,0,0.5)",
	label: "Italy"
},
{
	value: 12484,
	color: "rgba(255,255,255,.67)",
	highlight: "rgba(0,0,0,0.5)",
	label: "India"
},
{
	value: 11104,
	color: "rgba(255,255,255,.5)",
	highlight: "rgba(0,0,0,0.5)",
	label: "United States"
},
{
	value: 10077,
	color: "rgba(255,255,255,.33)",
	highlight: "rgba(0,0,0,0.5)",
	label: "Germany"
},
{
	value: 69221,
	color: "rgba(255,255,255,0)",
	highlight: "rgba(0,0,0,0.5)",
	label: "Others"
}
];

var originOptions = {
	animationEasing : "easeOutQuint",
	animationSteps : 100,
};

var originChartContext = document.getElementById("originPieChart").getContext("2d");
var originChart = new Chart(originChartContext).Pie(originChartData,originOptions);

// Average percentage of tax

var avgTaxData = {
	labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
	datasets: [
	{
		label: "Imports per Year",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [50.80, 53.53, 53.79, 54.07, 53.77, 53.56, 53.2]
	}
	]
};

var avgTaxOptions = {
	scaleShowGridLines : false,
	scaleFontColor: "#fff",
	scaleShowLabels : false,
	maintainAspectRatio: false
};


var avgTaxGrowth = document.getElementById("avgtax-growth").getContext("2d");

$('someselector').appear();
var avgTaxChart = new Chart(avgTaxGrowth).Line(avgTaxData, avgTaxOptions);