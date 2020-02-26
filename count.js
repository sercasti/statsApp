function buildCount(){
    var totalValues = [19, 26, 55];
    var videoLabels = ['VoD Werner Vogels', 'VoD Marcello Zillo', 'VoD Andy Jazzy'];

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