var repos = require("./../resources/js/getrepos.js").reposModule; //basically fetches the object constructor repos from getrepos.js
var display = function(name, userInfo, reposInfo, moreInfo) {
    $("#name").text(name);
    $("#login").text(userInfo);
    $("#repoos").append("<h3><a href=" + reposInfo + ">Click here to see " + name + "'s" + " repositories.</a>" + "<h3>");
    console.log(userInfo, " ", reposInfo + " YES");
};
$(document).ready(function() {
    var searchrepos = new repos();
    searchrepos.userRepos();
    $("#githubuser").click(function(event) {
        event.preventDefault();
        var name = $("input#user").val(); //this get the user input
        $("input#user").val("");
        console.log(name);
        searchrepos.userRepos(name, display);

        $('#name').empty();
        $('#login').empty();
        $('#repoos').empty();

    });
});

//The below method is also a raw method that can also get user user's data but the backend has not been separated with
//the front-end

//Try it out too!!

/*var apiKey = require("./../.env").apiKey;
$(document).ready(function() {
  $("#githubuser").click(function(){
    var user = $("input#user").val();
    $.get("https://api.github.com/users/" + user + "?access_token=" + apiKey).then(function(response){
      var link = response.repos_url;
      $(".name").text(response.name);
      $("#repos").text(response.repos_url);
    }).fail(function(error){
      alert(error.responseJSON.message);
    });
  });
});
*/
