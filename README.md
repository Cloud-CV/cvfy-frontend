<p align="center"><img width="65%" src="origami_logo.png" /></p>

<p align="center">
 <a href="https://travis-ci.org/Cloud-CV/Origami">
	<img src="https://travis-ci.org/Cloud-CV/Origami.svg?branch=master"/>
 </a>
 <a href='https://coveralls.io/github/Cloud-CV/Origami?branch=master'>
	<img src='https://coveralls.io/repos/github/Cloud-CV/Origami/badge.svg?branch=master' alt='Coverage Status' />
 </a>
 <a href="https://david-dm.org/Cloud-CV/cvfy-frontend" title="dependencies status">
	<img src="https://david-dm.org/Cloud-CV/cvfy-frontend/status.svg"/>
 </a>
 <a href="https://david-dm.org/Cloud-CV/cvfy-frontend?type=dev" title="devDependencies status">
	<img src="https://david-dm.org/Cloud-CV/cvfy-frontend/dev-status.svg"/>
 </a>
 <a href="https://github.com/prettier/prettier" title="styled with">
	<img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"/>
 </a>
 <a href="https://gitter.im/Cloud-CV/Origami?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
	<img src="https://badges.gitter.im/Cloud-CV/Origami.svg"/>
 </a>
</p>

 Origami is an AI-as-a-service that allows researchers to easily convert their deep learning models into an online service that is widely accessible to everyone without the need to setup the infrastructure, resolve the dependencies, and build a web service around the deep learning model. By lowering the barrier to entry to latest AI algorithms, we provide developers, researchers and students the ability to access any model using a simple REST API call.

<p align="center"><img width="65%" height="45%" src="origami.png" /></p>
<h4 align="center">Artificial Intelligence as a Service</h4>

## Goal

 The aim of this project is to create a framework that can help people create a web based demo out of their machine learning code and share it. Others can test the model without going into the implementation details. Usually testing models by other people involves a lot of preparation and setup. This project aims to cut that down.

## Installation Instructions

Setting up Origami on your local machine is really easy. You can setup Origami by following steps.

### Setting the environment variables

* `origami.env` stores all the environment variables necessary to run Origami.

1. `HOST` should be set to the hostname of the server
2. `PORT` should be set to the port you want the server to listen on. (Generally 80)
3. `DB_NAME` will be used to set the name for your postgres database
4. `DB_PASS` will be used to set the password for the database user. This is also the admin password
5. `DB_USER` is the username for a user who can modify the database. This is also the admin username
6. `DB_USER_EMAIL` stores the email for the admin
7. `DB_HOST `should be set to postgres in production and localhost in development
8. `REDIS_HOST` should be set to redis and localhost in development

To create the file, `cp origami.env.sample origami.env` and edit the file with the above fields.

* `Origami/outCalls/config.js` stores config variables needed by the UI.

1. `CLIENT_IP` should be set to the same value as `HOST` in `origami.env`
2. `CLIENT_PORT` should be set to the same value as `PORT` in `origami.env`
3. For `DROPBOX_API_KEY` , check step 3 of [configuring Origami](http://cloudcv-origami.readthedocs.io/en/latest/web-app.html#configuration)

## Development setup instructions

**Install [Node v5+](https://nodejs.org/en/download/) and [Python 2.7/3.4+](https://www.python.org/downloads/), if you don't have already as this application requires node v5+ and Python 2.7/3.4+**

### I. Create a Python Virtual Environment

```
pip install virtualenv
virtualenv venv
``` 
##### Note: venv = Name of virtualenv
```
source venv/bin/activate
```

**Note: Command ```virtualenv venv``` will create a folder named venv in your working directory**

### II. Getting the code and dependencies

1. Get the source code on your machine via git.
```
git clone https://github.com/Cloud-CV/Origami.git && cd Origami
```

2. Install all python dependencies.
 ```
 pip install -r requirements.txt
```

3. Add all the javascript dependencies

```
yarn
``` 
or

```
npm install
```
`yarn` is preferred.

4. Setup redis : 
 ```
 docker run -d -p 6379:6379 --name origami-redis redis:alpine
```
5. Setup the environment

```
source origami.env
```

### III. Setting up the database

#### Create all the tables

```
python manage.py makemigrations
python manage.py migrate
```

#### Create admin account

```
python manage.py initadmin
```

### IV. Start the server

- Start the server by ```python manage.py runserver --noworker```
- Start the worker by ```python manage.py runworker```
- Run : ```yarn run dev```
- That's it, Open web browser and hit the url [localhost:8000](http://localhost:8000/).

You can also visit [Read the docs](http://cloudcv-origami.readthedocs.io/en/latest/) for further instructions on Getting started.

## Contributing to Origami

1. Make sure you run tests on your changes before you push the code using:
	* ```
	python manage.py test
	```
	* ```
	yarn run test
	```

2. Fix lint issues with the code using:
	* ```
	yarn run lint:fix
	```

## Contribution guidelines

This app is presently under active development and we welcome contributions. Please check out our [issues thread](https://github.com/Cloud-CV/Origami/issues) to find things to work on, or ping us on [Gitter](https://gitter.im/Cloud-CV/Origami).
If you are interested in contributing to Origmai follow our [contribution guidelines](https://github.com/Cloud-CV/Origami/blob/master/.github/CONTRIBUTING.md) .

## License

This software is licensed under GNU AGPLv3. Please see the included `License` file. All external libraries, if modified, will be mentioned below explicitly.
