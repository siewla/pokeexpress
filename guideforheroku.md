Summary, there are two ways to deploy 
1. by command line and GitHub repo
2. through heroku website and GitHub repoHeroku Deployment 

You need a folder in ur GitHub for the app. - the repo can be private too :)
https://devcenter.heroku.com/articles/git

My steps
1) create a repo in GitHub
2) git clone the blank repo
3) copy all the file to the folder
4) git add git commit and git push

Then for heroku
Download The Heroku CLI
https://devcenter.heroku.com/articles/heroku-cli


Once you downloaded, in the folder of your app which the GitHub, you do heroku create appname
1) heroku create appname
2) git push heroku master

Done, now I not even do all these I linked my GitHub repo and heroku can directly update based on my master branch :)

https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/ 
here is the link you no need to download heroku
