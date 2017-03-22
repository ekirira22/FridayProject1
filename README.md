# GitHub User Lookup
## Friday Week1 Project: Independent project using API
## By Eric Kirira Maranga 22nd March 2016

## Description
Create a website where users may enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories. Use the GitHub API to retrieve this information._

## Behavior Driven Development
Any user can search for a github user by putting the username as it is on github in the input box

## Setup
1.  Open terminal (for Linux Users)
2.  $ git clone https://github.com/ekirira22/FridayProject1.git to your project file
3.  $ cd GitHub-User-Lookup
4.  $ npm install
5.  $ bower install
6.  $ npm install browser-sync --save-dev
7.  $ npm install gulp-sass gulp-sourcemaps --save-dev
8. And all other dependency files you may require like jshint
9.  Create your API (Personal Access Token) in GitHub:
    Incase you are lost on how to do so look up https://developer.github.com/v3/
10.  $ make an .env file in your root directory and type in exports.apiKey = "place your-API-here"; and save.
11. The rest of the files are included in the folder
10. if there's error run $ gulp jshint
11. Run $gulp build which will basically do all the gulp task
12. Incase of any errors, check the JavaScript by running $gulp jshint

## Known Bugs
The website has to be reloaded for you to get results :(

## Support and contact details
Please contact the author if you have any questions, suggestions or comments

## Technologies Used

HTML, CSS, JavaScript, Node.js, Npm & Gulp, Bower & Sass, API


## License
_Copyright (c) 2016 Eric Maranga at MoringaSchool
