# ng-pm - bbv Project Manager, the Angular way

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running e2e tests

Run `npm run cypress` to execute end-to-end tests via [Cypress](https://www.cypress.io/)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. Also check out [@froko/ng-essentials](https://www.npmjs.com/package/@froko/ng-essentials).

## Steps to reproduce

Here are the commands and tweaks used to create the application

1. Create a new application

   `ng new ng-pm --prefix=bbv --routing=false --style=css --strict=false`

2. Add [@froko/ng-essentials](https://www.npmjs.com/package/@froko/ng-essentials)

   `ng add @froko/ng-essentials --jest --cypress`

3. Install _Bootstrap 4_

   `npm install bootstrap font-awesome jquery popper.js --save`

   Include styles and scripts in `angular.json`:

   ```json
   {
     "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
     "version": 1,
     "newProjectRoot": "projects",
     "projects": {
       "ng-pm": {
         "architect": {
           "build": {
             "options": {
               "styles": [
                 "src/styles.css",
                 "node_modules/bootstrap/dist/css/bootstrap.min.css",
                 "node_modules/font-awesome/css/font-awesome.css"
               ],
               "scripts": [
                 "node_modules/jquery/dist/jquery.min.js",
                 "node_modules/bootstrap/dist/js/bootstrap.min.js",
                 "node_modules/popper.js/dist/umd/popper.min.js"
               ]
             }
           }
         }
       }
     }
   }
   ```

4. Add JSON Web API

   `npm install json-server jsonwebtoken --save-dev`

5. Add navigation component

   `ng generate component nav`

6. Add footer component

   `ng generate component footer`

7. Add home component

   `ng generate component home`
