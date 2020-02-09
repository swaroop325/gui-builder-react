import React from 'react';
import {ReactComponent as SVG} from '../msd-logo.svg';
export default class Toolbar extends React.Component {
    generateForm = () => {
        this.props.showPreview();
    }
    deleteForm = () => {
        localStorage.clear();
        this.props.clearForm();
    }
    render() {
        var buttonVisible = this.props.data.length > 0 ? '' : 'hidden';
        return (<div>
            <div className="button-tools">
                <span><SVG/></span>
                <span className={`buttons ${buttonVisible}`}>
                <button className="btn btn-primary formBtn" style={{ marginRight: '10px' }} onClick={this.deleteForm.bind(this)}><i className="fa fa-close"/>CLEAR</button>
                <button className="btn btn-primary closeBtn" style={{ marginRight: '10px' }} onClick={this.generateForm.bind(this)}><i className="fa fa-save"/>SAVE</button>
                </span> 
                </div>
        </div>
        );
    }
}
