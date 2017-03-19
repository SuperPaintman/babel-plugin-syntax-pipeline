'use strict';
/** Imports */
import Parser, { plugins } from 'babylon/lib/parser';
import { TokenType, types as tt } from 'babylon/lib/tokenizer/types';

/** Constants */
const CHAR_CODES = '|>'.split('').map((c) => c.charCodeAt(0));
const PLUGIN_NAME = 'pipeline';

const beforeExpr = true;


/** Types */
tt.pipeline = new TokenType('|>', { beforeExpr, binop: 12 });


/** Parser */
const pp = Parser.prototype;

pp.readToken_pipeline = function readToken_pipeline(code) {
  return this.finishOp(tt.pipeline, 2);
};



/** Plugin */
function plugin(instance) {
  instance.extend('readToken', (inner) => function readToken(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (!(code === CHAR_CODES[0] && next === CHAR_CODES[1])) {
      return inner.call(this, code);
    }

    return this.readToken_pipeline(code);
  });
}


/** Export */
plugins[PLUGIN_NAME] = plugin;

export default function () {
  return {
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push(PLUGIN_NAME);
    }
  };
};
