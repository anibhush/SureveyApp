# SurveyApp

This app is deployed at: <H3>https://quiet-savannah-94946.herokuapp.com/</H3>

# To deploy the app using Heroku

\$ heroku login

# To create heroku repo. This will give two links as o/p. 1st link is the link to your app. Second link is link to heroku repo

\$ heroku create
Creating app... done, ⬢ quiet-savannah-94946
https://quiet-savannah-94946.herokuapp.com/ | https://git.heroku.com/quiet-savannah-94946.git

\$ git remote add heroku https://git.heroku.com/quiet-savannah-94946.git
fatal: remote heroku already exists. # This is totally fine!!

\$ git remote -v
heroku https://git.heroku.com/quiet-savannah-94946.git (fetch)
heroku https://git.heroku.com/quiet-savannah-94946.git (push)
origin https://github.com/anibhush/SurveyApp.git (fetch)
origin https://github.com/anibhush/SurveyApp.git (push)

# To deploy app

\$ git push heroku master  
...
remote: https://quiet-savannah-94946.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.

# Verify Deployment

\$ heroku open

# Check logs

\$ heroku logs

# SUBSEQUENT DEPLOYS:
