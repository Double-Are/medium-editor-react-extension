var fs = require('fs')
var React = require('react')
var MediumEditor = require('medium-editor')
var ColorPicker = require('react-color')
var reactExtension = require('./index')
var pkg = require('./package.json')
var insertCss = require('insert-css')
var css = fs.readFileSync('./node_modules/medium-editor/dist/css/medium-editor.css')
var theme = fs.readFileSync('./node_modules/medium-editor/dist/css/themes/tim.css')

insertCss('body {padding: 25%; text-align: center;}' + css + theme)

var div = document.createElement('div')
div.innerHTML = `<h1>${pkg.name}</h1><p>${pkg.description}</p>`
document.body.appendChild(div)

var ExampleComponent = React.createClass({
  getInitialState () {
    return {active: false}
  },
  render () {
    return (
      <div>
        <button
          onClick={this.handleClick}>Color</button>
        {this.state.active && (
          <ColorPicker
            type={'swatches'}
            onChange={this.handleChange}
            position={'left'}/>
        )}
      </div>
    )
  },
  handleClick () {
    this.props.editor.saveSelection()
    this.setState({active: !this.state.active})
  },
  handleChange (color) {
    this.props.editor.restoreSelection()
    document.execCommand('foreColor', null, color.hex)
  }
})

var ColorPickerExtension = reactExtension(ExampleComponent)

var editor = new MediumEditor(div, {
  toolbar: {
    buttons: ['color']
  },
  extensions: {
    color: new ColorPickerExtension()
  }
})
