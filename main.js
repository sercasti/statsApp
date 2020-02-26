buildCount();
buildHeatMap();


url = 'https://6ine6u27z5.execute-api.us-east-1.amazonaws.com/default/getStatsForMoment';

$(document).ready(function() {
    $.ajax({
      url: url,
      crossDomain: true,
      beforeSend: function(xhr) {
        xhr.withCredentials = true;
      },
      success: function(response) {
        var resp = JSON.parse(response)
        alert(resp.status);
      },
      error: function(xhr, status) {
        alert("error");
      }
    });
});