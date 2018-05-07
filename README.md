# Nodejs - Vue - Postgresql Sample Project
This is an example project featuring the use of nodejs, vuejs and postgresql in the same project

## Requirements
1. Nodejs/npm/pm2
2. Postgresql

If you are running on any ubuntu variants, you can run this to get things started quickly
```bash
echo "Installing Nodejs"
sudo apt-get install nodejs -y
sudo ln -s "$(which nodejs)" /usr/bin/node
sudo apt-get install npm -y

echo "Upgrade nodejs"
sudo npm install n -g
sudo n stable

echo "Installing Postgres"
sudo apt-get install postgresql postgresql-contrib
```

For windows, install following executables

[Installing nodejs on windows](blog.teamtreehouse.com/install-node-js-npm-windows)

[Installing postgresql on windows](https://www.labkey.org/Documentation/wiki-page.view?name=installPostgreSQLWindows)

For macos, get brew and execute following commands
```shell
brew install node
brew install postgresql
```

Then upgrade nodejs and install the dependencies
```powershell
npm install n -g
n stable
npm install -g pm2
```

## Setting up
Before running the code, we need to setup postgtesql and append the postgresql details in server/config/config.json

Open up the psql console and run the following command
```psql
CREATE USER user WITH PASSWORD 'secret';
CREATE DATABASE development;
GRANT ALL PRIVILEGES ON DATABASE development TO user;
```

then modify the config.json DATABASE_URI params with the following (assuming using development environment)
```json
  "development": {
    "PORT": 3000,
    "DATABASE_URI": "postgres://user:secret@localhost:5432/development"
  },
```

## Usage
Simply run following commands on the root folder to start

```bash
npm install
npm start
```

# Changelog

## Breaking Change
- Added support for Webpack4, ESLint and Babel 7
- Cleaned code and structure
