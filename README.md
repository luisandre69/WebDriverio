# webdriverio
Udemy course: 
https://www.udemy.com/automation-testing-javascript-webdriverio-selenium-more/learn/v4/t/lecture/12941230?start=15

#install project
npm install

#run server
./node_modules/.bin/selenium-standalone start

#run test
./node_modules/.bin/wdio

#add additional logging to the console window
npm test -- --logLevel=verbose

#run actual tests
npm test -- --spec test.js

#allure test
allure generate location
allure generate location --clean //cleans the folder
