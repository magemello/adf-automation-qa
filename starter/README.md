## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies

## Description
- run tests: `protractor conf.js`
- Basically I use visual studio code for code editing. I use 2 terminals, 1 outside visualStudio 
    for keeping the selenium server up and running, the other one inside Visual Studio Code for 
    terminal git commmands and running the `protractor conf.js`. Didn't modify anything in the 
    configuration file. In order to run under CI/CD we should look up for an integration with 
    Gitlab,Bamboo, Jenkins,TeamCity etc of protractor(always have in mind the CI/CD mindset when 
    you build something from scratch). In the solution provided by you, you have a spec.js file that could be easily renamed to reflect the current flow, needed also to map that name inside conf.js

 ***Explanation***
 - I thought the solution starting by isolate the ids,methods,general functionalities in order to reuse them later. I broke the flow in functionalities sections : Settings, SiteVisitation, Login, Files and General Functionalities. The main flow should always be readable and easy to understand(PS: I don't like Gerkin :)). The ids should be proper isolate into their specifics functionalities: Settings to Settings, Login to Login and so on. Also having the methods and  using ids in the same package of functionalities ensures a better maintainability. I created functions as general as possibile like: click on element, that could be reused all over when you need to click on specific id,same for css, cssWithText and other situations. Also the methods are parameterizable. To generate reports (reports I noticed in the conf.js) you need a command line useable also in a job/pipeline that match reporting. An example could be: npx run --parallel --report mochawesome/serenity/allure  or something like that, etc etc. A proper useable command should be easy to create. Also noticed that in conf.js you mentioned Chrome as browser.If you have a project using Chrome/Firefox/Edge and API automation I advice you to use Cypress in the future, better API, much less flakiness, wait for API instead of timeout elements/wait for elements etc, better performance on parallel running, on local runnning, on CI/CD and noticed a lot of latency from selenium server from the protocol communication. To be honest, given the fact I didn't use protractor before I looked on stackoverflow trying to find the right api more than in 2 years using Cypress :) I was kind of disapointed on lack of functionalities, needed to improvize a lot on id not working, not a lot of chaining commands.But I highly appreciate the custom automation identifiers,is a best practice.We educate our developers as well to do that :)

 ***Prerequisites***
 - I tried to ensure lint for better formating but somehow couldn't use it, I'll investigate it later.
 - I tried to ensure yarn but for some reason it doesn't install protractor completely, so I return to node/npm
 - I installed protractor using this :npm install -g protractor
 - I updated the version of webdriver manager doing this command : webdriver-manager update
 - I installed protractor,I started the selenium server using : webdriver-manager start
 - Also used Chrome 81