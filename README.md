[![Stories in Ready](https://badge.waffle.io/polarbasin/polarbasin.png?label=ready&title=Ready)](https://waffle.io/polarbasin/polarbasin)
# PolarBasin

> Greenfield Project for Hack Reactor Immersion at Operation Spark

## Team

  - __Product Owner__: [glaserD](https://github.com/glaserd)
  - __Scrum Master__: [harveysanders](https://github.com/harveysanders)
  - __Development Team Members__: [harveysanders](https://github.com/harveysanders), [glaserD](https://github.com/glaserd)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

[Live beta deployed on Heroku](https://polarbasin.herokuapp.com)


## Requirements

- Node 6.0.x
- Webpack
- http-server (for mobile testing over wifi)
- mobile device with GPS and Compass

## Development

### Installing Dependencies

From within the root directory for full stack:

```sh
npm install
npm run dev
```

You can also just run the React front-end without the server:
To start Webpack (transpiles React JSX into ES5 Javascript)

```sh
npm run watch
```

Then in another terminal start a `http-server` in the `client/app/public' folder to test the front end over Wifi:

```sh
http-server -p 1337
```

### Roadmap

View the project roadmap [here](https://github.com/polarbasin/polarbasin/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
