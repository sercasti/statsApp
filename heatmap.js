function buildHeatMap(inputData){
    var xValues = ['Completed', 'KeepAlive', 'Pause', 'Play', 'Seek', 'Stop'];
    var yValues = [];
    var zValues= [];

    var results = inputData.totalResults.results;

    for(i = 0; i < results.length; i++){
        var result = results[i];
        videoName = Object.keys(result)[0];
        yValues.push(videoName);
        var events = result[videoName];
        var videoEvents = [];
        for(j = 0; j < events.length; j++){
            var event = events[j];
            switch (event.eventName) {
                case 'completeview':
                    videoEvents[0]= event.count;
                    break;
                case 'keepalive':
                    videoEvents[1]= event.count;
                    break;
                case 'pause':
                    videoEvents[2]= event.count;
                    break;
                case 'play':
                    videoEvents[3]= event.count;
                    break;
                case 'seek':
                    videoEvents[4]= event.count;
                    break;
                case 'stop':
                    videoEvents[5]= event.count;
                    break;
                default:
                    console.log('no case for value ' + expr + '.');
            }
        }
        zValues[i] = videoEvents;
    }
    
    var data = [
        {
            z: zValues,
            x: xValues,
            y: yValues,
            type: 'heatmap',
            hoverongaps: false
            
        }
    ];
    var layout = {
        title: 'Count of event by VoD and Event',
        yaxis: {
            automargin: true,
        }
    };
    Plotly.newPlot('heatmap', data, layout, {displayModeBar: false, responsive:true});
}
    