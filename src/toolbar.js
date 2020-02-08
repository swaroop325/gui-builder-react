import React from 'react';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false
        };
    }

    showPreview() {
        this.setState({
            previewVisible: true,
        });
    }

    deleteForm() {
        localStorage.clear();
    }

    closePreview() {
        this.setState({
            previewVisible: false,
        });
    }

    render() {
        var modelVisible = this.state.previewVisible ? '' : 'hidden';
        return (<div>
            <h4 className="heading">MSD GUI BUILDER</h4>
            <div className="buttons">

                <button className="btn btn-primary formBtn" style={{ marginRight: '10px' }} onClick={this.showPreview.bind(this)}>Preview Form</button>
                <button className="btn btn-primary formBtn" style={{ marginRight: '10px' }} onClick={this.deleteForm.bind(this)}>Clear Form</button>
            </div></div>
        );
    }
}
