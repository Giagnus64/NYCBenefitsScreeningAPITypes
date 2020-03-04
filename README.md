# Typescript Typings for The NYC Benefits Screener API

This repository contains typings for using the [NYC Benefits Screener API](https://screeningapidocs.cityofnewyork.us/overview) for use with Typescript. 

The index file contains nested types and interfaces for making requests to the API. 


## Usage

Get the package with ```npm install nycbsa_types``` . 
You can import the types under the name NYCBSA or individually.
```js
import {NYCBSA} from 'nycbsa_types'
const household: NYCBSA.HouseholdConfig {...}
```

```js
import {RequestConfig, HouseholdConfig} from 'nycbsa_types'

const household : HouseholdConfig {...}
```

Alternatively, download ```index.d.ts``` from this repo.

Then in your project, reference the file in the top of your ```.ts``` with the path to where the file is stored. It might look like this:

```js
/// 
<reference path="../node_modules/@types/nycbsa_types/index.d.ts" 
/>
```


## Feel free to make pull requests and raise issues. I'm always open to criticism and feedback.