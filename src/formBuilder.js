
import React, { Component } from 'react'
import { ReactFormBuilder } from 'react-form-builder2';
import Toolbar from './toolbar'
class GUIBuilder extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="page">
            <div className="toolbar">
                <Toolbar/>
            </div>
            <div className="gui-builder">
                <ReactFormBuilder
                    onLoad={this.onLoad}
                    onPost={this.onPost} />
            </div>
        </div>


        )
    }
}

export default GUIBuilder;