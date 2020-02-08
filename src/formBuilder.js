
import React from 'react'
import { ReactFormBuilder } from 'react-form-builder2';
import Toolbar from './toolbar'
class GUIBuilder extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] , flushed: true};
        this.clearForm = this.clearForm.bind(this);
    }
    componentDidMount() {
        if (localStorage.getItem("formData")) {
            this.setState({ data: JSON.parse(localStorage.getItem("formData")) });
        } else {
            this.setState({ data: [] });
        }
    }
    clear(){
        this.setState({ data: [] });
    }
    clearForm() {
        localStorage.clear();
        this.setState({ flushed: !this.state.flushed });
    }
    onPost = (data) => {
        localStorage.setItem("formData", JSON.stringify(data))
    }
    render() {
        var formData = this.state.data.length > 0 ? this.state.data.task_data : [] ;
        return (<div className="page">
            <div className="toolbar">
                <Toolbar clearForm={this.clearForm} />
            </div>
            <div className="gui-builder">
                <ReactFormBuilder
                    data={formData}
                    onPost={this.onPost} />
            </div>
        </div>


        )
    }
}

export default GUIBuilder;