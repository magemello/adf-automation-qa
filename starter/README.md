## Description
- open cmd and go to the location where the file conf.js is located
- to run tests run command: `protractor conf.js`

## Explanation 
- I decided to split the scenario in 5 smaller test and create a class with the page objects for each test. 
- The class contains the getters for the elements needed in the test.
- Depending on the test steps and needed elements, each class is instanced in the test.
- I used mostly the css selector data-automation-id, because I expect that this won't be changed so often.
- The purpose of this approach is to achieve an easily maintainable framework.

## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies