## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies

## Description
- run tests: `npm test`

## Explanation
 - Added a custom locator (automationLocator) to find DOM objects using "data-automation-id"
 - Used DOM id for few elements where "data-automation-id" is not available.
 - While clicking "New Folder" icon identified there is delay in enabling, so added "browser.sleep"
 - To identify Delete button dynamically, I have added code to loop through Grid and get index of folder added with my GIT name and get automation id Delete button. Since automation id and DOM id are unavailable used css as locator.
 - Added a function to add new folder so that it can be reused.