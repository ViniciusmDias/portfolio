---
title: Weather Forecast
date: "2020-06-01T22:12:03.284Z"
description: "Global weather forecast with temperature, humidity, heat sensation for the next 6 hours."
techs: "reactjs, typescript, styled-components, eslint, prettier"
imgUrl: "./favicon.jpeg"
live: "https://viniciusdias-weatherforecast.netlify.app/"
---

<h3 align="center">
  Weather Forecast</strong>
</h3>

<p align="center">
  <a aria-label="Node version" href="https://nodejs.org/en/blog/release/v12.16.3/">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="React version" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16131-march-19-2020">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Typescript version" href="https://www.npmjs.com/package/typescript/v/3.7.2">
    <img src="https://img.shields.io/badge/typescript-3.7.2-blue-informational?logo=typescript"></img>
  </a>
</p>

<p>
  Project Name: <strong>Wheater Forecast</strong>
</p>

### Development

- In the root directory (/weather-forecast) of the project, install all the necessary libraries for development with the command:

```js
  yarn install
```

- In the root directory (/weather-forecast) of the project, start the application in development mode at [localhost](http://localhost:3000) with the command:

```js
  yarn start
```

### :sparkles: Tech Introduction

- Developed using Typescript standards within React (create-react-app);
- The EsLint and Prettier libraries were used for identification and a better debugging of the code;

#### Basic Template

- Create the project with create-react-app;

```js
  create-react-app weather-forecast --template=typescript
```

#### Added Libraries

- Added the Eslint libraty to project in development mode:

```js
  yarn add eslint -D
```

- Added the following library in the development version, to import typescript by default:

```js
  yarn add eslint-import-resolver-typescript -D
```

- Added the Prettier library to the project in development mode:

```js
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- Added the Styled Components library to stylized the aplication:

```js
  yarn add styled-components
```

- Added the Axios library to HTTP request's:

```js
  yarn add axios
```

- Added the React Icons library to use some icons:

```js
  yarn add react-icons
```

#### Project Structure

The project contains the following folders

./src

- /components => Reusable application components;
- /pages => Application pages;
- /routes => Application routes;
- /styles => Global styles of aplication;

---

Some comments have been added to the code to improve understanding;
