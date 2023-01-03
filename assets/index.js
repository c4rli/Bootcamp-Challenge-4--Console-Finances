var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];


// Set locale and currency string
var locale = "en-gb";
var currency = "GBP";

// Run calculate() as main
calculate();

function calculate() {
    
    // Variables
    var totalMonths = finances.length;
    var totalProfit = 0;
    var totalChange = 0;
    var greatestProfits = [["", 0]];
    var greatestLoss = [["", 0]];

    // Loop through all elements to cumulatively add to total profit value
    for (var i = 0; i < totalMonths; i++) {
        totalProfit += finances[i][1];
    }

    // Loop through all elements -1 to calculate the changes in profit over time
    for (var i = 0; i < totalMonths - 1; i++) {
        changeString = (finances[i][0] + " " + finances[i + 1][0]);
        changeValue = finances[i + 1][1] - finances[i][1];

        // Cumulative total of profit changes
        totalChange += changeValue;

        var pair = [changeString, changeValue];

        // push value of current array element if higher or lower than current greatest profit/loss
        // NOTE: not actually a proper sorting method but is less complicated than implementing one
        if (changeValue > greatestProfits[0][1]) {
            greatestProfits.splice(0, 0, pair);
        }

        else if (changeValue < greatestLoss[0][1]) {
            greatestLoss.splice(0, 0, pair);
        }
    }
    // Convert decimal to 2 decimal places
    var averageChange = +(totalChange / (totalMonths - 1)).toFixed(2);
    
    // Print values calculated above to console
    console.log(`c4rli's Financial Analysis Report \n
    Dates: ${finances[0][0]} to ${finances[totalMonths - 1][0]}\n
    Total Months in Report: ${totalMonths}\n
    Total Profit: ${totalProfit.toLocaleString()} ${currency}\n
    Average Change: ${averageChange.toLocaleString()} ${currency}\n
~~~~~ Greatest Profit/Loss ~~~~~\n
    Greatest Profits: ${greatestProfits[0][1].toLocaleString()} ${currency} (${greatestProfits[0][0]})\n
    Greatest Loss: ${greatestLoss[0][1].toLocaleString()} ${currency} (${greatestLoss[0][0]})\n\n
    `);

    // Add values calculated above to HTML file
    document.getElementById("data-dates").innerHTML = (`${finances[0][0]} to ${finances[totalMonths - 1][0]}`);
    document.getElementById("data-totMonths").innerHTML = (`${totalMonths}`);
    document.getElementById("data-totProfit").innerHTML = (`${totalProfit.toLocaleString()} ${currency}`);
    document.getElementById("data-avgChange").innerHTML = (`${averageChange.toLocaleString()} ${currency}`);

    document.getElementById("data-profits-date-1").innerHTML = (`${greatestProfits[0][0]}`);
    document.getElementById("data-profits-value-1").innerHTML = (`${greatestProfits[0][1].toLocaleString()} ${currency} `);
    document.getElementById("data-profits-date-2").innerHTML = (`${greatestProfits[1][0]}`);
    document.getElementById("data-profits-value-2").innerHTML = (`${greatestProfits[1][1].toLocaleString()} ${currency} `);
    document.getElementById("data-profits-date-3").innerHTML = (`${greatestProfits[2][0]}`);
    document.getElementById("data-profits-value-3").innerHTML = (`${greatestProfits[2][1].toLocaleString()} ${currency} `);

    document.getElementById("data-loss-date-1").innerHTML = (`${greatestLoss[0][0]}`);
    document.getElementById("data-loss-value-1").innerHTML = (`${greatestLoss[0][1].toLocaleString()} ${currency} `);
    document.getElementById("data-loss-date-2").innerHTML = (`${greatestLoss[1][0]}`);
    document.getElementById("data-loss-value-2").innerHTML = (`${greatestLoss[1][1].toLocaleString()} ${currency} `);
    document.getElementById("data-loss-date-3").innerHTML = (`${greatestLoss[2][0]}`);
    document.getElementById("data-loss-value-3").innerHTML = (`${greatestLoss[2][1].toLocaleString()} ${currency} `);
}

// Function to toggle top profits view when clicked
function showTopProfits() {
    document.getElementById("card-main").setAttribute("style", "display:none");
    document.getElementById("card-topprofits").setAttribute("style", "display:unset");
}

// Function to toggle main view when clicked
function showMain() {
    document.getElementById("card-main").setAttribute("style", "display:unset");
    document.getElementById("card-topprofits").setAttribute("style", "display:none");
}