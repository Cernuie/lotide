# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Description
Various helpful function made for assignment from Lighthouse Labs
## Author
{ "name" : "Alexander Nguyen",
  "email" : "cernvii@gmail.com"}
## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cernuie/lotide`

**Require it:**

`const _ = require('@cernuie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: tests if two elements are equal and logs out a string whether they do or not
* `head`: returns the first element of an array
* `tail`: returns everything but the first element of an array
* `middle`: returns the middle of an array
* `eqArrays`: returns boolean if two arrays are equal
* `eqObjects`: returns boolean if two objects are equal
* `assertArraysEqual`: logs out string whether array are equal or not
* `assertObjectsEqual`: logs out string whether objects are equal or not
* `findKey`: finds key in an object using a callback function
* `findKeyByValue`: finds key in an object with a given value
* `index`: an index of all functions in package
* `letterPositions`: returns position of a given letter in a string in the form of an array
* `map`: given an array and a callback function meant to transform elements of an array, maps the callback function to the array
* `takeUntil`: given an array and callback function, returns the elements of an array until callback becomes truthy
* `without`: takes out elements in an array
