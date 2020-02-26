buildCount();
buildHeatMap();


url = 'https://6ine6u27z5.execute-api.us-east-1.amazonaws.com/default/getStatsForMoment';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });