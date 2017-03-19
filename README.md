# babel-plugin-syntax-pipeline

[![Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Code Climate][codeclimate-image]][codeclimate-url]


> Allow parsing of pipeline operator `|>`


**Proposal**: [mindeavor/es-pipeline-operator][proposal-url]


--------------------------------------------------------------------------------


## Installation

```sh
npm install --save-dev babel-plugin-syntax-pipeline

# or

yarn add --dev babel-plugin-syntax-pipeline
```


--------------------------------------------------------------------------------


## Usage
### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["syntax-pipeline"]
}
```


### Via CLI

```sh
babel --plugins syntax-pipeline script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["syntax-pipeline"]
});
```


--------------------------------------------------------------------------------

## Build

```sh
npm run build
```


--------------------------------------------------------------------------------

## Test

```sh
npm run test
```


--------------------------------------------------------------------------------


## Contributing

1. Fork it (<https://github.com/SuperPaintman/babel-plugin-syntax-pipeline/fork>)
2. Create your feature branch (`git checkout -b feature/<feature_name>`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin feature/<feature_name>`)
5. Create a new Pull Request



--------------------------------------------------------------------------------


## Contributors

- [SuperPaintman](https://github.com/SuperPaintman) SuperPaintman - creator, maintainer


--------------------------------------------------------------------------------


## License

[MIT][license-url]


[license-url]: LICENSE
[travis-image]: https://img.shields.io/travis/SuperPaintman/babel-plugin-syntax-pipeline/master.svg?label=linux
[travis-url]: https://travis-ci.org/SuperPaintman/babel-plugin-syntax-pipeline
[coveralls-image]: https://img.shields.io/coveralls/SuperPaintman/babel-plugin-syntax-pipeline/master.svg
[coveralls-url]: https://coveralls.io/r/SuperPaintman/babel-plugin-syntax-pipeline?branch=master
[codeclimate-image]: https://img.shields.io/codeclimate/github/SuperPaintman/babel-plugin-syntax-pipeline.svg
[codeclimate-url]: https://codeclimate.com/github/SuperPaintman/babel-plugin-syntax-pipeline
[proposal-url]: https://github.com/mindeavor/es-pipeline-operator
