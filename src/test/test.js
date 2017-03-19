'use strict';
/* global it, describe */
/** Imports */
import './helper';

import path           from 'path';

import * as chai      from 'chai';

import { transform }  from 'babel-core';


/** Constants */
const babelOptions = {
  plugins: [path.join(__dirname, '../index.js')]
};


/** Init */
const { expect } = chai;


/** Tests */
describe('pipeline operator', () => {
  it('should work', function () {
    transform(`
      const res = user.name
        |> capitalize
        |> sayHello;
    `, babelOptions);

    transform(`
      const res = user.score
        |> (_ => _ * 2)
        |> (_ => _.toFixed(3));
    `, babelOptions);

    transform(`
      const pathToUrl = (rootDir, filePath) => [rootDir, filePath]
        |> ((args) => path.relative(...args))
        |> path.dirname
        |> ((res) => res.split(path.sep).join(path.posix.sep))
        |> ((res) => '/' + (res === '.' ? '' : (res + '/')))
        |> ((res) => res.replace(/@/g, ':'));
    `, babelOptions);
  });

  it('should raise error', function () {
    expect(() => {
      return transform(`
        const res
          |> capitalize
          |> sayHello;
      `, babelOptions);
    }).to.throw(SyntaxError, /Unexpected token/);

    expect(() => {
      return transform(`
        |> capitalize
        |> sayHello;
      `, babelOptions);
    }).to.throw(SyntaxError, /Unexpected token/);

    expect(() => {
      return transform(`
        const res = user.score
          |> _ => _ * 2
          |> _ => _.toFixed(3);
      `, babelOptions);
    }).to.throw(SyntaxError, /Unexpected token/);

    expect(() => {
      return transform(`
        const pathToUrl = (rootDir, filePath) =>
          |> ((args) => path.relative(...args))
          |> path.dirname
          |> ((res) => res.split(path.sep).join(path.posix.sep))
          |> ((res) => '/' + (res === '.' ? '' : (res + '/')))
          |> ((res) => res.replace(/@/g, ':'));
      `, babelOptions);
    }).to.throw(SyntaxError, /Unexpected token/);
  });
});
