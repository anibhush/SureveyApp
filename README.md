# SurveyApp

This app is deployed at: <H3>https://quiet-savannah-94946.herokuapp.com/</H3>

# To deploy the app using Heroku

- heroku login

<p>
To create heroku repo.

- heroku create<BR/>
<SMALL>Creating app... done, ⬢ quiet-savannah-94946
https://quiet-savannah-94946.herokuapp.com/ | https://git.heroku.com/quiet-savannah-94946.git</SMALL>
</p>

<p>

- git remote add heroku https://git.heroku.com/quiet-savannah-94946.git <BR/>
<SMALL>fatal: remote heroku already exists. # This is totally fine!!</SMALL>
</p>

<p>

- git remote -v <BR/>
<SMALL>heroku https://git.heroku.com/quiet-savannah-94946.git (fetch)
heroku https://git.heroku.com/quiet-savannah-94946.git (push)
origin https://github.com/anibhush/SurveyApp.git (fetch)
origin https://github.com/anibhush/SurveyApp.git (push)</SMALL>
</p>

<p>
To deploy app

- git push heroku master <BR/>
</p>

<p>
Verify Deployment

- heroku open <BR/>
</p>

<p>
Check logs

- heroku logs <BR/>
</p>

# SUBSEQUENT DEPLOYS:

- git push heroku master
