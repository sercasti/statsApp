function buildCount(inputData){
    console.log(inputData);
    var results = inputData.totalResults.results;

    var videoLabels = [];
    var totalValues = [];

    for(i = 0; i < results.length; i++){
        var result = results[i];
        var videoName = Object.keys(result)[0];
        videoLabels.push(videoName);
        var events = result[videoName];
        for(j = 0; j < events.length; j++){
            var event = events[j];
            if(event.eventName === "play"){
                totalValues.push(event.count);
            }
        }
    }

    var data = [{
        values: totalValues,
        labels: videoLabels,
        type: 'pie'
    }];
    
    var layout = {
        title: 'Videos Total Views %'
    };
    
    Plotly.newPlot('count', data, layout, {staticPlot: true});
}