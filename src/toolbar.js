import React from 'react';
import { Redirect } from 'react-router-dom';
export default class Toolbar extends React.Component {
    state = {
        redirect: false
    }
    generateForm = () => {
        this.setState({
            redirect: true
        })
    }
    showPreview() {
        if (this.state.redirect) {
            return <Redirect to='/form' />
        }
    }
    deleteForm() {
        localStorage.clear();
        this.props.clearForm();
    }
    render() {
        return (<div>
            {this.showPreview()}
            <h4 className="heading">MSD GUI BUILDER</h4>
            <div className="buttons">
                <button className="btn btn-primary formBtn" style={{ marginRight: '10px' }} onClick={this.generateForm.bind(this)}>Generate Form</button>
                <button className="btn btn-primary formBtn" style={{ marginRight: '10px' }} onClick={this.deleteForm.bind(this)}>Clear Form</button>
            </div>
        </div>
        );
    }
}
