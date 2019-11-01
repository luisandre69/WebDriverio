# install project
* npm install

# run server
* ./node_modules/.bin/selenium-standalone start

# run test
* ./node_modules/.bin/wdio

# add additional logging to the console window
* npm test -- --logLevel=verbose

# run actual tests
* npm test -- --spec test.js

# allure test
* allure generate location
* allure generate location --clean //cleans the folder

# jenkins

* java -jar jenkins.war --enable-future-java --httpPort=5555