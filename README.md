# ES6 native module fork
This fork provides a browser friendly export of the module at /es/index.js (ES6 JavaScript native module).
That export includes all dependencies in one file so as to reduce http calls.
The /es/index-nodeps.js file is similar but does not include dependencies. This one is for build optimization.
The purpose of this and similar forks is to be able to load JS native modules and their dependencies from npm.

# hyphenate-style-name

[![npm version](http://img.shields.io/npm/v/hyphenate-style-name.svg?style=flat-square)](http://browsenpm.org/package/hyphenate-style-name)[![Build Status](http://img.shields.io/travis/rexxars/hyphenate-style-name/master.svg?style=flat-square)](https://travis-ci.org/rexxars/hyphenate-style-name)[![Coverage Status](http://img.shields.io/codeclimate/coverage/github/rexxars/hyphenate-style-name.svg?style=flat-square)](https://codeclimate.com/github/rexxars/hyphenate-style-name)[![Code Climate](http://img.shields.io/codeclimate/github/rexxars/hyphenate-style-name.svg?style=flat-square)](https://codeclimate.com/github/rexxars/hyphenate-style-name/)

Hyphenates a camelcased CSS property name. For example:

- `backgroundColor` => `background-color`
- `MozTransition` => `-moz-transition`
- `msTransition` => `-ms-transition`
- `color` => `color`

# Installation

```bash
$ npm install --save hyphenate-style-name
```

# Usage

```js
var hyphenateStyleName = require('hyphenate-style-name');

console.log(hyphenateStyleName('MozTransition')); // -moz-transition
```

# License

BSD-3-Clause licensed. See LICENSE.
