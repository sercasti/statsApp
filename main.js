url = 'https://6ine6u27z5.execute-api.us-east-1.amazonaws.com/default/getStatsForMoment';

loadData();

function loadData(){
  var queryParam = '?substract=' + document.getElementById("period").value;
  fetch(url + queryParam)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildCount(data);
      buildHeatMap(data);
    });
}