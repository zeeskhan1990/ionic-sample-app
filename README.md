## Introduction

This is a sample project based on ionic and has only been tested on the browser for now.

## Styling

The app uses sass for styling and the corresponding files are situated in the "scss" folder.

## External Dependencies

There is also an added dependency for angular-messages used for displaying validation messages mentioned in the bower.json file.

## Controllers

Due to the limited lines of code in the controllers, the individual controllers have not been seggregated into different files, and are all defined in the "www/js/controllers.js" file.

## App and Routes
 
"www/js/app.js" is the bootstrapping file for the application, the main module and it's dependencies have been declared here as well as the functions that needs to be executed after all of the services have been configured and the injector has been created in the 'run' block. "www/js/routes.js" consists of declarations of ui-routes for navigation in the app.

## Templates

The html templates for the application are in the "www/templates" folder and has been seggregated into different sub-folders as per the purpose of the templates.