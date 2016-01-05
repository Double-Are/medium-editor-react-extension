# medium-editor-react-extension

Use react components inside medium-editor extensions

## Example

``` js
var React = require('react')
var MediumEditor = require('medium-editor')
var SomeComponent = require('./SomeComponent')
var reactExtension = require('@boomtrain/medium-editor-react-extension')

var ReactifiedExtension = reactExtension(SomeComponent)

var editor = new MediumEditor(div, {
  toolbar: {
    buttons: ['someExtension']
  },
  extensions: {
    someExtension: new ReactifiedExtension()
  }
})
```

## Usage

### reactExtension(Component)

Returns a medium-editor [extension](https://github.com/yabwe/medium-editor/tree/master/src/js/extensions).
The provided `Component` will be rendered as the toolbar button and have access to the medium-editor instance as `props.editor`.

## Install

``` bash
$ npm install @boomtrain/medium-editor-react-extension
```

## License

The MIT License

Copyright &copy; 2016, Boomtrain

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
