var apiKey = require("./../.env").apiKey;
$(document).ready(function() {
  $("#githubuser").click(function(){
    var user = $("input#user").val();
    $.get("https://api.github.com/users/" + user + "?access_token=" + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
