  
import React, { Component } from 'react'
var FormBuilder = require('react-form-builder2');

class Form extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var items = [{
            key: 'Header',
            name: 'Header Text',
            icon: 'fa fa-header',
            static: true,
            content: 'Placeholder Text...'
          },
          {
            key: 'Paragraph',
            name: 'Paragraph',
            static: true,
            icon: 'fa fa-paragraph',
            content: 'Placeholder Text...'
          }];          
        return(
            <FormBuilder.ReactFormBuilder
            url='./initial.json'
            toolbarItems={items}
            saveUrl='./form.json'/>
        )
    }
}

export default Form;