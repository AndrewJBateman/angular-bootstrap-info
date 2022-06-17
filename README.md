# :zap: Angular Bootstrap Info

* Angular app to show [mediastack Global News Data API](https://mediastack.com) data in a Bootstrap card array
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-bootstrap-info?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-bootstrap-info?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-bootstrap-info?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-bootstrap-info?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Bootstrap Info](#zap-angular-bootstrap-info)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Free news from the [mediastack REST API](https://mediastack.com) supplied in JSON format
* take(1), tap() and map() methods used to extract API data.
* Angular Async subscribe pipe used directly with the news response observable in the html template as it is auto-unsubscribing, instead of an observable subscription.

## :camera: Screenshots

![Example screenshot](./imgs/news.png)

## :signal_strength: Technologies

* [Angular v13](https://angular.io/)
* [Reactive Extensions Library for Javascript rxjs v7](https://rxjs-dev.firebaseapp.com/)

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Get an API key using [Mediastack Quickstart](https://mediastack.com/quickstart)
* Add API_KEY to `environment.ts` files
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng update` to update Angular

## :computer: Code Examples

* `info.service.ts` http request returns an observable data stream that I tapped using console.log

```typescript
    return this.http.get<ApiResponse>(apiUrl).pipe(
      take(1),
      tap(res => console.log(res)),
      map(res => res['data']),
      catchError(err => {
        throw 'an error occured: ' + err;
      }),
    );
```

## :cool: Features

* Use of Angular async pipe in HTML template reduces amount of code and auto-unsubscribes from the news data observable

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Add images? Change API? Add pagination??. Add click to data detail page.

## :clap: Inspiration

* [mediastack REST API](https://mediastack.com/documentation)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
