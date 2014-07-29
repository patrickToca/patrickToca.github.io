/**
 * Created by pmjtoca on 02/06/2014.
 */
var chart1, chart2;
var legend1, legend2;

var chartData1 = [
    {
    "category1": "FN",
    "column-1": "24.85"
    },
    {
        "category1": "UMP",
        "column-1": "20.8"
    },
    {
        "category1": "PS-MRG",
        "column-1": "13.98"
    },
    {
        "category1": "UDI-MODEM",
        "column-1": "9.93"
    },
    {
        "category1": "EELV",
        "column-1": "8.95"
    },
    {
        "category1": "FG",
        "column-1": "6.33"
    },
    {
        "category1": "DD",
        "column-1": "5.98"
    },
    {
        "category1": "DG",
        "column-1": "3.18"
    },
    {
        "category1": "Autres",
        "column-1": "6.0"
    }];

var chartData2 = [
    {
        "category2": "FN",
        "column-2":  "10.12"
    },
    {
        "category2": "UMP",
        "column-2":  "8.47"
    },
    {
        "category2": "PS-MRG",
        "column-2":  "5.69"
    },
    {
        "category2": "UDI-MODEM",
        "column-2":  "4.04"
    },
    {
        "category2": "EELV",
        "column-2":  "3.64"
    },
    {
        "category2": "FG",
        "column-2": "2.58"
    },
    {
        "category2": "DD",
        "column-2":  "2.43"
    },
    {
        "category2": "DG",
        "column-2":  "1.29"
    },
    {
        "category2": "Autres",
        "column-2":  "2.44"
    },
    {
        "category2": "Blancs",
        "column-2":  "1.31"
    },
    {
        "category2": "Nuls",
        "column-2":  "0.53"
    },
    {
        "category2": "Abstentions",
        "column-2": "57.58"
    }
]

AmCharts.ready(function () {
    // PIE CHART
    chart1 = new AmCharts.AmPieChart();
    chart1.dataProvider = chartData1;
    chart1.titleField = "category1";
    chart1.valueField = "column-1";
    chart1.outlineColor = "#FFFFFF";
    chart1.outlineAlpha = 0.7;
    chart1.outlineThickness = 0.5;
    chart1.theme = "patterns";
    chart1.balloonText = "[[title]]<br /><hr><span style='font-size:14px'><b>[[percents]]%</b></span>";
    chart1.titles = [
        {
            "id": "Title-1",
            "size": 14,
            "text": "L'ABSTENTION OUBLIEE ou ENTERREE... "
        },
        {
            "id": "Title-2",
            "size": 14,
            "text": " Résultats présentés."
        }
    ];

    // WRITE
    chart1.write("chartdiv1");
});
AmCharts.ready(function () {
    // PIE CHART
    chart2 = new AmCharts.AmPieChart();
    chart2.dataProvider = chartData2;
    chart2.titleField = "category2";
    chart2.valueField = "column-2";
    chart2.outlineColor = "#FFFFFF";
    chart2.outlineAlpha = 0.7;
    chart2.outlineThickness = 0.5;
    chart2.theme = "patterns";
    chart2.balloonText = "[[title]]<br /><hr><span style='font-size:14px'><b>[[percents]]%</b></span>";
    chart2.titles = [
        {
            "id": "Title-1",
            "size": 14,
            "text": "LA VERITE, jamais présentée ni analysée!"
        },
        {
            "id": "Title-2",
            "size": 14,
            "text": " Résultats officiels (avec abstentions, votes blancs et nuls). "
        }
    ];


    // WRITE
    chart2.write("chartdiv2");
});
