# Web API Deployment Challenge

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please fork this repository and follow along **using your fork** as the instructor deploys the API to `heroku`.

## STEPS to take in our code to get app ready for Heroku
- Make the port dynamic (so that when app is in production on Heroku, heroku can pick the port that it runs on)
    - read the port from `process.env.PORT` : look at `index.js`
- someone who has access to Heroku is the one who adds your project to a certain port
- add a start script to package.json that uses Node to run the app. 
    "start": "node index.js" : look in `package.json`
- `npm i dotenv` and a add `.env` file to add configuration variables to the environment on our local computers
- connect on heroku to a branch on Gitub that you want to make "live"
- enable automatic deployment on heroku
- code, commit, push
- add any needed configuration variables on heroku => settings => Reveal Config Vars, the key value pairs need to match what you established on your .env file