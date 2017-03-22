$(document).ready(function() {
  $("#githubuser").click(function(){
    var user = $("input#user").val();
    $("#showuser").text("The user you have chosen is" + user + ".");
  });
});
