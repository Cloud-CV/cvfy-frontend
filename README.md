<p align="center"><img width="30%" height="15%" src="origami_logo.png" /></p>

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
</p>

<p align="center"><img width="80%" height="60%" src="origami.png" /></p>
<h4 align="center">Artificial Intelligence as a Service</h4>

- Origami is an AI-as-a-service that allows researchers to easily convert their deep learning models into an online service that is widely accessible to everyone without the need to setup the infrastructure, resolve the dependencies, and build a web service around the deep learning model. By lowering the barrier to entry to latest AI algorithms, we provide developers, researchers and students the ability to access any model using a simple REST API call.

- The aim of this project is to create a framework that can help people create a web based demo out of their machine learning code and share it. Others can test the model without going into the implementation details. Usually testing models by other people involves a lot of preparation and setup. This project aims to cut that down.


This app is presently under active development and we welcome contributions. Please check out our [issues thread](https://github.com/Cloud-CV/Origami/issues) to find things to work on, or ping us on [Gitter](https://gitter.im/Cloud-CV/Origami).

# Installation Instructions

## For Windows

### VirtualBox

One of the easier ways to get started with Origami on Windows is by using a virtual machine of Ubunutu 16.04 LTS on Oracle's VirtualBox. We can install VirtualBox in just two easy steps.

#### Step One - Downloading Virtual Box
<p>You can install Virtual Box on [Oracle's VirtualBox website](https://www.virtualbox.org/wiki/Downloads). 
<p><img width="50%" height="50%" src="https://user-images.githubusercontent.com/24444124/48304752-b1ba6e00-e4ec-11e8-869b-32e10a5bd6f1.png" /></p>
Next, under "Virtual binaries," click on "Windows hosts" under "VirtualBox X.X.XX platform packages" to download the executable file for the latest version of VirtualBox. Wait for this to install and open the file when the download has completed.</p>

#### Step Two - Starting installation

The .exe file will have the following format: VirtualBox-VersionNumber-BuildNumber-Win.exe.
- Once the setup wizard is open, follow the instructions. Everything can be kept as default, but feel free to change anything to your preference. 
- If you see Windows User Account Control Warning, click yes to accept and continue.
- When you reach the Network Interface dialouge box, be sure to proceed. VirtualBox will install network interfaces that will interact with the installed virtual machines and Windows. Although you will be temporarily disconnected from the Internet, everyhting will be okay.

When you launch VirtualBox, you should see a screen similar to the one below. Congratualtions, you have successfully installed VirtualBox! 
<p><img width="50%" height="50%" src="https://user-images.githubusercontent.com/24444124/48304960-d87aa380-e4f0-11e8-88c7-255b4ee2d3a2.jpg" /></p>

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

## Production setup instructions 

**Use docker to setup Origami on production**

### Running the server

You can run the server with the help of docker and docker-compose.

Run  `docker-compose up`

## Development setup instructions

**This application requires node v5+ and Python 2.7/3.4+**

### Create a Virtual Environment

1. `pip install virtualenv`
2. `virtualenv venv` venv = Name of virtualenv
3. `source venv/bin/activate`

**Note: Step 2 will create a folder named venv in your working directory**

### Getting the code and dependencies

1. Clone this repository

2. Navigate to the repo. Usually `cd Origami/`

3. Add all the python dependencies.
   `pip install -r requirements.txt` 

4. Add all the javascript dependencies
   `yarn` (preferably) or `npm install`

5. Setup redis 
   `docker run -d -p 6379:6379 --name origami-redis redis:alpine`

6. Setup the environment

   `source origami.env`

### Setting up the database

#### Create all the tables

```
python manage.py makemigrations
python manage.py migrate
```

#### Create admin account

`python manage.py initadmin`

### Start the server

1. Start the server by `python manage.py runserver --noworker`
2. Start the worker by `python manage.py runworker`
3. `yarn run dev`
4. Go to [localhost:8000](http://localhost:8000/)
  Visit [Read the docs](http://cloudcv-origami.readthedocs.io/en/latest/) for further instructions on Getting started

## Contributing to Origami

1. Make sure you run tests on your changes before you push the code using:
	* `python manage.py test`
	* `yarn run test`

2. Fix lint issues with the code using:
	* `yarn run lint:fix`

## License

This software is licensed under GNU AGPLv3. Please see the included `License` file. All external libraries, if modified, will be mentioned below explicitly.
