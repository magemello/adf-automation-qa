## Alfresco ADF automation QA exercise

Do you love automation testing and you know how to solve the following exercise? Contact us! We may have a job for you :)
* https://jobs.smartrecruiters.com/Alfresco/743999676099136-senior-qa-automation-engineer

## Exercise
Fork this GitHub repository and push the produced code in your fork repository. 

Automate the following scenario using protractor:

1. Access to http://qaexercise.envalfresco.com/settings
2. Change Provider to ECM
3. Click Apply
4. Navigate to http://qaexercise.envalfresco.com/login
    - Insert Username and Password
    - Username : guest@example.com
    - Password : Password
    - Click Login
5. Navigate to http://qaexercise.envalfresco.com/files
6. Click on 'create new folder' icon.
7. New folder dialog is displayed.
8. Introduce your Github username (for example in my case) "magemello".
9. Name has been added.
10. Click on 'Create' button.
11. The dialog is closed. Folder with your Github username is created in the current folder.
12. Click on 'create new folder' icon.
13. New folder dialog is displayed.
14. Introduce your Github username (for example in my case) "magemello".
15. Name has been added.
16. Click on 'Create' button.
17. The dialog is not closed.
18. The message "There's already a folder with this name. Try a different name" is displayed.
19. Select the folder with your Github username
20. Open Options window (3 dots)
21. Click delete

In the README file of the repository we want to see also the following sections:
1. ***Description*** Describes of how to run the automation test
2. ***Explanation*** Describes the choice made in the solution
3. ***Prerequisites*** List here what/if anything needs to be installed

You can send the link to your fork at mario.romano@alfresco.com. Feel free to attach also your cv and a link to your linkedin profile.

### Starter
The framework has already been setup in the /starter folder, please add your teest case in the spec.js file. 

### Some info about protractor
* https://github.com/angular/protractor
* https://blog.cloudboost.io/building-your-first-tests-for-angular5-with-protractor-a48dfc225a75

### Some info about ADF
* https://github.com/Alfresco/alfresco-ng2-components
* https://alfresco.github.io/adf-component-catalog/
