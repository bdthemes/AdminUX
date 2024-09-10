(function ($) {
    'use strict';

    //myChart JS
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


     //oilChart JS

     var oilCanvas = document.getElementById("oilChart");

     Chart.defaults.global.defaultFontFamily = "Lato";
     Chart.defaults.global.defaultFontSize = 13;
     
     var oilData = {
         labels: [
             "Saudi Arabia",
             "Russia",
             "Iraq",
             "United Arab Emirates",
             "Canada"
         ],
         datasets: [
             {
                 data: [133.3, 86.2, 52.2, 51.2, 50.2],
                 backgroundColor: [
                     "#FF6384",
                     "#63FF84",
                     "#84FF63",
                     "#8463FF",
                     "#6384FF"
                 ]
             }]
     };
     
     var pieChart = new Chart(oilCanvas, {
       type: 'pie',
       data: oilData
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


     //line Chart JS


 var ctx = document.getElementById("lineChart").getContext('2d');
var lineChart = new Chart(ctx, {
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




 //Area Chart JS


 var ctx = document.getElementById("areaChart").getContext('2d');

 var areaChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
         datasets: [{
             label: 'Series 1', // Name the series
             data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
             fill: true,
             borderColor: '#1c45ef', // Add custom color border (Line)
             backgroundColor: '#1c45ef', // Add custom color background (Points and Fill)
             borderWidth: 1 // Specify bar border width
         },
                   {
             label: 'Series 2', // Name the series
             data: [1288,	88942,	44545,	7588,	99,	242,	1417,	5504,	75, 457], // Specify the data values array
             fill: true,
             
             borderColor: 'rgba(28, 69, 239, 0.8)', // Add custom color border (Line)
             backgroundColor: 'rgba(28, 69, 239, 0.8)', // Add custom color background (Points and Fill)
             borderWidth: 1 // Specify bar border width
         }]
     },
     options: {
       responsive: true, // Instruct chart js to respond nicely.
       maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
     }
 });

 var ctx = document.getElementById("myDoughnutChart").getContext('2d');

 var myDoughnutChart = new Chart(ctx, {
     type: 'doughnut',
     data: {
         labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai"],
         datasets: [{    
             data: [1000,	300,	500,	800], // Specify the data values array
           
             borderColor: ['#ff6384', '#ffcd56', '#36a2eb', '#00968896'], // Add custom color border 
             backgroundColor: ['#ff6384', '#ffcd56', '#36a2eb', '#00968896'], // Add custom color background (Points and Fill)
             borderWidth: 1 // Specify bar border width
         }]},         
     options: {
       responsive: true, // Instruct chart js to respond nicely.
       maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
     }
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

var ctx = document.getElementById("scatterChart").getContext("2d");
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