### DataField
Sort, select, filter and perform maths and analysis on your arrays of data

[![codecov](https://codecov.io/gh/tomkallen/datafield/branch/master/graph/badge.svg)](https://codecov.io/gh/tomkallen/datafield)
[![Build Status](https://travis-ci.org/tomkallen/datafield.svg?branch=master)](https://travis-ci.org/tomkallen/datafield)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


[Documentation](https://tomkallen.github.io/datafield/)

## What is DataField

DataField is a library that helps you wrangle your awesome collections of data you obtain from different sources.

Imagine you are building a web application that deals with users. You make an API request and receive an array of 100 entries which look like this one below:

        `{
      "_id": "5b420ae94fe6464ff91f5de8",
      "index": 0,
      "guid": "871eebf0-9983-4eb5-a0b5-59372a2fbecd",
      "isActive": true,
      "balance": "$1,268.06",
      "age": 41,
      "name": {
        "first": "Pearlie",
        "last": "Osborne"
      },
      "company": "PIVITOL",
      "email": "pearlie.osborne@pivitol.net",
      "phone": "+1 (992) 418-2307",
      "address": "190 River Street, Spelter, Tennessee, 1088",
      "registered": "Monday, April 18, 2016 7:35 AM",
      "tags": ["ad", "magna", "aliqua"],
      "friends": [{"id": 0, "name": "Whitney Snow"}, {"id": 1, "name": "Garza Hernandez"}, {"id": 2,"name": "Lourdes Conley"}]
    }` 
      

With this library it is rather easy to perform various actions on your data.

#### How It Works

    const users = new DataField(arrayOfUsers)

Now your data is stored within an instance of DataField class.

Each method that performs any kind of selection or filtering returns a **new instance** of DataField and can be chained.

Math methods return primitives and can not be chained

To extract your data use `.values()` or `toArray()`

  
Lets filter our data. We need users who are 30 years old or older, but not 41 years old and have at least 2 friends, but less than 10. Also we want our list sorted by last name _(library can work with nested props)_ in descending order. Then we are done so we want an array out of that:

    users.where('age').gte(30).not(41).where('friends').range(2, 10).sort({by: 'name.last', order: 'desc'}).toArray()

That's it. API is short and simple.
Also, read the [Documentation](https://tomkallen.github.io/datafield/)

`npm install datafield`
