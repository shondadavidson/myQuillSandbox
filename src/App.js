import React from 'react';
import './App.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// import sticky_toolbar from '../src/module-sticky-toolbar'



class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: '',
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  // handleHtmlChange() {
  //   this.setState({
  //     editorHtml: html
  //   })
  // }

  handleChange(value) {
    this.setState({
      text: value
    })
  }

  modules = {
    toolbar: [
      // [{'sticky_toolbar': true}]
      [ { 'header': [ 1, 2, 3, 4, 5, 6, false ] } ],
      [ { 'font': [] } ],
      [ 'bold', 'italic', 'underline' ],
      [ { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' } ],
      [ { 'color': [] }, { 'background': [] } ],
      [ 'link' ],
      [ 'code-block' ],

    ],
  }

  formats = [
    'header', 'font',
    'bold', 'italic', 'underline',
    'list', 'bullet', 'indent',
    'color', 'background', 'size', 'link', 'code-block'
  ]



  render() {
    return (
      <div className='editor'>
        <p>Hello World</p>
        <p>some initial <strong>bold</strong> text</p>
        <p><br></br></p>
        <div className='quill'>
          <ReactQuill
            theme="snow"
            value={ this.state.text }
            onChange={ this.handleChange }
            modules={ this.modules }
            formats={ this.formats }
            bounds={ '.app' }
          />
        </div>
      </div>
    );
  }
}

export default Editor;
