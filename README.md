<h1 align="center">Welcome to express-api-drawer 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/tutanck" target="_blank">
    <img alt="Twitter: tutanck" src="https://img.shields.io/twitter/follow/tutanck.svg?style=social" />
  </a>
</p>

> Draw api map in express app

## Install

```sh
npm i express-api-drawer
```

## Usage
Asume you have an express route map like this ([see example here](https://github.com/expressjs/express/blob/4.13.1/examples/route-map/index.js#L52-L66)).

```Javascript
const verbose = true;

//express
const express = require('express');
const app = express();

const config = require('express-api-drawer');
config(app); // setup the draw function on app

const api = {
  '/users': {
    get: users.list,
    delete: users.delete,
    '/:uid': {
      get: users.get,
      '/pets': {
        get: pets.list,
        '/:pid': {
          delete: pets.delete
        }
      }
    }
  }
};


app.draw(api, verbose); // we can now draw the api
```

## Author

👤 **tutanck**

- Twitter: [@tutanck](https://twitter.com/tutanck)
- Github: [@tutanck](https://github.com/tutanck)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/tutanck/express-api-drawer/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
