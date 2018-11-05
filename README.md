HTML/CSS/JS project
Includes Gulp to compile Scss into CSS, along with Autoprefixer and Browser Sync.

Setup
Before starting, you'll need Node (which includes NPM).

If using OSX, I'd recommend this guide to getting set up with Node.

install npm package:

npm install

Then install Gulp using:

npm install -g gulp. 

This installs Gulp globally and is needed later.

Clone this repo to your local computer using this command:

With the files downloaded, navigate to your folder on the command line (or Terminal)

cd "name folder"

and run:

npm install to set things up.

If that doesn't work, it may be necessary to use sudo npm install.

With this set up, you should now be able to run:

gulp default
This will process any SCSS files and launch a web browser showing the current files. Making changes to the files should result in the page updating automatically.