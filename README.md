# SurveyApp

This app is deployed at: <H3>https://quiet-savannah-94946.herokuapp.com/</H3>

# To deploy the app using Heroku

- heroku login

<p>
To create heroku repo. 
-  heroku create
Creating app... done, ⬢ quiet-savannah-94946
https://quiet-savannah-94946.herokuapp.com/ | https://git.heroku.com/quiet-savannah-94946.git
</p>

<p>
-  git remote add heroku https://git.heroku.com/quiet-savannah-94946.git
fatal: remote heroku already exists. # This is totally fine!!
</p>

<p>
-  git remote -v
heroku https://git.heroku.com/quiet-savannah-94946.git (fetch)
heroku https://git.heroku.com/quiet-savannah-94946.git (push)
origin https://github.com/anibhush/SurveyApp.git (fetch)
origin https://github.com/anibhush/SurveyApp.git (push)
</p>

<p>
To deploy app
- git push heroku master 
</p>

<p>
Verify Deployment
-  heroku open
</p>

<p>
Check logs
- heroku logs
</p>

# SUBSEQUENT DEPLOYS:

- git push heroku master
