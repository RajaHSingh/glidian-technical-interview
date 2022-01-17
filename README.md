# glidian

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
`npm run start:backend` and `npm run start:frontend` (in different terminals)
   to make sure you're able to run the app successfully.
```

### Available scripts

- `npm install` installs dependencies

  - sqlite3 may fail to build if there are spaces in the repository path (https://github.com/nodejs/node-gyp/issues/439).
    Please move the repository to a path without spaces if this occurs.
    If you are building on windows, you might run into the above code because the correct windows build tools are not detected(https://stackoverflow.com/questions/35293117/npm-install-that-requires-node-gyp-fails-on-windows)

- `npm run start:backend` will start the backend and serve it
  from http://localhost:5000.
- `npm run start:frontend` will start the backend and serve it
  from http://localhost:3000, proxying backend requests to :5000.
  (this command will fail if start:backend is not running)

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
