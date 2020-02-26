function buildHeatMap(){
    var xValues = ['0 to 20', '20 to 40', '40 to 60', '60 to 80', '80 to 100'];
    var yValues = ['Completed', 'Play', 'Stop', 'Pause', 'Seek', 'KeepAlive'];
    var zValues = [
        [null, null, null, null, 90], 
        [2, 11, 6, 40, 20], 
        [30, 60, 1, 0, 20],
        [1, null, 30, 50, 1], 
        [20, 1, 60, 80, 30], 
        [30, 60, 1, 0, 20]
    ];
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
        title: 'VoD Werner Vogels'
    };
    Plotly.newPlot('heatmap', data, layout, {staticPlot: true});
}
    