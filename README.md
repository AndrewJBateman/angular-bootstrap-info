# :zap: Angular Bootstrap Info
 
* Angular app to show [mediastack Global News Data API](https://mediastack.com) data in a Bootstrap card array
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-bootstrap-info?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-bootstrap-info?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-bootstrap-info?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-bootstrap-info?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Material Table](#zap-angular-material-table)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Free news from the [mediastack REST API](https://mediastack.com) supplied in JSON format
* Rxjs take(1) and map() methods used to extract API data.
* Angular Async subscribe pipe used directly with the news response observable in the html template as it is auto-unsubscribing, instead of an observable subscription. 

## :camera: Screenshots

![Example screenshot](./img/home.jpg)

## :signal_strength: Technologies

* [Angular v12](https://angular.io/)
* [Reactive Extensions Library for Javascript rxjs v7](https://rxjs-dev.firebaseapp.com/)
* [Ngx-pagination](https://www.npmjs.com/package/ngx-pagination)

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng update` to update Angular
* Run `npm run lint` to lint app - produces no output at the moment

## :computer: Code Examples

* tba

```typescript

```

## :cool: Features

* Array of responsive bootstrap cards

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Change API? Add pagination??. Add click to data detail page.

## :clap: Inspiration

* [mediastack REST API](https://mediastack.com/documentation) 

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
