(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a2e60550ecaa44289aff7401844a5612cc0382ad";

},{}],2:[function(require,module,exports){
var apiKey = require("./../../.env").apiKey; //fetches the apiKey from .env
repos = function() {

};
repos.prototype.userRepos = function(name, dataDisplay) {
    $.get("https://api.github.com/users/" + name + "?access_token=" + apiKey).then(function(response) {
        console.log(response);
        dataDisplay(response.name, response.login, response.html_url, response.repo_url);
        console.log(response.login + " " + response.html_url);
    }).fail(function(error) {
        $("#result").text("The username " + name + " is " + error.responseJSON.message + ".");
    });
};
exports.reposModule = repos;
//allows this whole code above to be exported to the interface using the method .reposModule

},{"./../../.env":1}],3:[function(require,module,exports){
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

},{"./../resources/js/getrepos.js":2}]},{},[3]);
