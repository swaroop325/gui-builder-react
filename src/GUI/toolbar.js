import React from 'react';
export default class Toolbar extends React.Component {
    generateForm = () => {
        this.props.showPreview();
    }
    deleteForm() {
        localStorage.clear();
        this.props.clearForm();
    }
    render() {
        var buttonVisible = this.props.data.length > 0 ? '' : 'hidden';
        return (<div>
            <h4 className="heading">MSD GUI BUILDER</h4>
            <div className={`buttons ${buttonVisible}`}>
                <button className="btn btn-primary formBtn" style={{ marginRight: '10px' }} onClick={this.generateForm.bind(this)}>Generate Form</button>
                <button className="btn btn-primary formBtn" style={{ marginRight: '10px' }} onClick={this.deleteForm.bind(this)}>Clear Form</button>
            </div>
        </div>
        );
    }
}
