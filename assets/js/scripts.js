// Alternate Configuation Options Here - https://accessible360.github.io/accessible-slick/#demos

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    instructionsText: 'Changing this current slide of this carousel will change the current slide of the thumbnail carousel that follows.',
    regionLabel: 'main image carousel'
  });
  
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    instructionsText: 'Changing the current slide of this carousel will change the current slide of the preceding main image carousel.',
    regionLabel: 'thumbnail carousel'
  });

  async function GetData() {
    "use strict";
    var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055680,07055646,07055780,07055660&period=P7D&parameterCd=00065&siteStatus=all"
    var msgObject = await fetch(myURL);
    var msgJSONText = await msgObject.text();
    var msg = JSON.parse(msgJSONText);


    /* Site 1 */
    var dates = [];
    var values = [];
    /* fLen contains the length of the array (number of values) */
    var fLen = msg.value.timeSeries[0].values[0].value.length
    for (var i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[0].values[0].value[i].value
        dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
    };
    var sitename = msg.value.timeSeries[0].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[0].variable.variableDescription

    /* Put your code here to display a graph of values and dates for Site 1*/
    var ctx = document.getElementById("chartjs-0");

    var myChart = new Chart(ctx, {
        "type": "line",
        "data": {
            "labels": dates,
            "datasets": [{
                "data": values,
                fill: false
            }]
        },
        "options": {
            responsive: false,
            maintainAspectRatio: true,
        },
    });

    /* Site 2 */
    var dates = [];
    var values = [];
    /* fLen contains the length of the array (number of values) */
    fLen = msg.value.timeSeries[1].values[0].value.length
    for (i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[1].values[0].value[i].value
        dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
    }
    var sitename = msg.value.timeSeries[1].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[1].variable.variableDescription

    /* Put your code here to display a graph of values and dates for Site 2*/
    var ctx = document.getElementById("chartjs-1");

    var myChart = new Chart(ctx, {
        "type": "line",
        "data": {
            "labels": dates,
            "datasets": [{
                "data": values,
                fill: false
            }]
        },
        "options": {
            responsive: false,
            maintainAspectRatio: true,
        },
    });

    /* Site 3 */
    var dates = [];
    var values = [];
    /* fLen contains the length of the array (number of values) */
    fLen = msg.value.timeSeries[2].values[0].value.length
    for (i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[2].values[0].value[i].value
        dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
    }
    var sitename = msg.value.timeSeries[2].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[2].variable.variableDescription

    /* Put your code here to display a graph of values and dates for Site 3*/
    var ctx = document.getElementById("chartjs-2");

    var myChart = new Chart(ctx, {
        "type": "line",
        "data": {
            "labels": dates,
            "datasets": [{
                "data": values,
                fill: false
            }]
        },
        "options": {
            responsive: false,
            maintainAspectRatio: true,
        }
    });

    /* Site 2 */
    var dates = [];
    var values = [];
    /* fLen contains the length of the array (number of values) */
    fLen = msg.value.timeSeries[3].values[0].value.length
    for (i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[3].values[0].value[i].value
        dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
    }
    var sitename = msg.value.timeSeries[3].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[3].variable.variableDescription

    /* Put your code here to display a graph of values and dates for Site 4*/
    var ctx = document.getElementById("chartjs-3");

    var myChart = new Chart(ctx, {
        "type": "line",
        "data": {
            "labels": dates,
            "datasets": [{
                "data": values,
                fill: false
            }]
        },
        "options": {
            responsive: false,
            maintainAspectRatio: true,
        },
    });
}