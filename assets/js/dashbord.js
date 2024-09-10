(function ($) {
    'use strict';

 // chart JS

var chart    = document.getElementById('chart1').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

var data  = {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
    datasets: [{
			label: 'Custom Label Name',
			backgroundColor: 'rgba(0, 49, 255, .2)',
			pointBackgroundColor: 'white',
			borderWidth: 1,
			borderColor: '#1e46f0',
			data: [0, 3, 5, 2, 4, 10, 0]
    }]
};


var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'red',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});

 // line chart JS

var chart    = document.getElementById('chart2').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

	var data  = {
		labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: 'rgba(0, 49, 255, .2)',
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#1e46f0',
				data: [0, 3, 5, 2, 4, 10, 0]
		}]
	};
	

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'red',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});



// line chart JS

var chart    = document.getElementById('chart3').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

	var data  = {
		labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: 'rgba(0, 49, 255, .2)',
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#1e46f0',
				data: [0, 3, 5, 2, 4, 10, 0]
		}]
	};
	

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'red',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});


// line chart JS

var chart    = document.getElementById('chart4').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

	var data  = {
		labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: 'rgba(0, 49, 255, .2)',
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#1e46f0',
				data: [0, 3, 5, 2, 4, 10, 0]
		}]
	};
	

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: '#fff',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});



    //myChart JS


    var ctx = document.getElementById("defaultChart").getContext('2d');
    var defaultChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
            datasets: [{
                label: 'Series 1', // Name the series
                data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
                fill: false,
                borderColor: '#2196f3', // Add custom color border (Line)
                backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]},
        options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        }
    });


       //polarArea JS

       var data = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };
    var ctx = $("#polarArea");
    new Chart(ctx, {
        data: data,
        type: 'polarArea'
    });

 //line bar JS

 var ctx = document.getElementById("lineChart").getContext('2d');

// Define the data 
var barTotalPopulationData = [22006299,	15834918,	14919501,	14797756,	14433147]; // Add data values to array
var lineExample1 = [120000, 15000000, 1454210, 240124, 3358452];
var lineExample2 = [5024554, 2001424, 4454201, 4565420, 5659888];

var labels = ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo"]; // Add labels to array
// End Defining data

// End Defining data
var lineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Population', // Name the series
            data: barTotalPopulationData, // Specify the data values array
            backgroundColor: [ // Specify custom colors
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'ExampleLine1', // Name the series
            data: lineExample1, // Specify the data values array
            backgroundColor: '#f443368c',
            borderColor: '#f443368c',
            
            borderWidth: 1, // Specify bar border width
            type: 'line', // Set this data to a line chart
            fill: false        
        },
                  {
            label: 'ExampleLine2', // Name the series
            data: lineExample2, // Specify the data values array
            backgroundColor: '#2196f38c',
            borderColor: '#2196f38c',
            
            borderWidth: 1, // Specify bar border width
            type: 'line', // Set this data to a line chart
            fill: false        
        }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});


 //Radar Chart JS

 var marksCanvas = document.getElementById("radarChart");

var marksData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "Student A",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "Student B",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData
});



// Create map instance
var chart = am4core.create("mapchart", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antartica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#5265f3");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#1c45ef");

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();








UIkit.util.ready(function () {

    var bar = document.getElementById('js-progressbar');

    var animate = setInterval(function () {

        bar.value += 10;

        if (bar.value >= bar.max) {
            clearInterval(animate);
        }

    }, 1000);
});


    UIkit.util.ready(function () {

        var bar = document.getElementById('js-progressbar2');
    
        var animate = setInterval(function () {
    
            bar.value += 10;
    
            if (bar.value >= bar.max) {
                clearInterval(animate);
            }
    
        }, 1000);

});


var color = Chart.helpers.color;
var scatterChartData = {
  datasets: [
    {
      label: 'title',
      xAxisID: "x-axis-1",
      yAxisID: "y-axis-1",
      backgroundColor: getRandomColor(),
      borderWidth: 0,
      pointRadius: getRandomInt(4, 14),
      data: [
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        }
      ]
    },
    {
      label: "My Second dataset",
      xAxisID: "x-axis-1",
      yAxisID: "y-axis-2",
      backgroundColor: getRandomColor(),
      borderWidth: 0,
      pointRadius: getRandomInt(4, 12),
      pointStyle: 'circle',
      data: [
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        },
        {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        }
      ]
    }
  ]
};

var ctx = document.getElementById("scatterChart1").getContext("2d");
window.myScatter = Chart.Scatter(ctx, {
  data: scatterChartData,
  options: {
    responsive: true,
    hoverMode: "nearest",
    intersect: true,
    title: {
      display: false,
      text: "Chart.js Scatter Chart - Multi Axis"
    },
    tooltips: {
      enabled: false
    },
    legend: {
        display: false
    },
    scales: {
      xAxes: [
        {
          position: "bottom",
          gridLines: {
            zeroLineColor: "rgba(0,0,0,1)"
          },
          display:true,
          ticks: {
                max: 120,
                min: 0,
                stepSize: 10
            }
        }
      ],
      yAxes: [
        {
          type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
                max: 120,
                min: 0,
                stepSize: 10
            }
               
        },
        {
          type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: false,
          position: "right",
          reverse: true,
          id: "y-axis-2",

          // grid line settings
          gridLines: {
            drawOnChartArea: false // only want the grid lines for one axis to show up
          }
        }
      ]
    },
    animation: {
      easing: 'easeInOutElastic',
      duration: 1600
    },
    layout: {
            padding: {
                left: 50,
                right: 0,
                top: 30,
                bottom: 0
            }
        }
  }
});

setInterval(function(){
  scatterChartData.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return {
        x: randomScalingFactor(),
        y: randomScalingFactor()
      };
    });
    dataset.backgroundColor = getRandomColor();
    dataset.pointRadius = getRandomInt(2, 14);
    
  });
window.myScatter.update();
},2000);

// generate random Color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// generate random Integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomScalingFactor(){
  return Math.floor(Math.random() * (110 - 10)) + 10;
}


})(jQuery);