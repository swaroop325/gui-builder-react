
import React from 'react'
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import Toolbar from './toolbar'

class GUIBuilder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            flushed: true,
            previewVisible: false
        };
        this.clearForm = this.clearForm.bind(this);
        this.showPreview = this.showPreview.bind(this);
    }
    componentDidMount() {
        if (localStorage.getItem("formData")) {
            this.setState({ data: JSON.parse(localStorage.getItem("formData")) });
        } else {
            this.setState({ data: [] });
        }
    }
    showPreview() {
        this.setState({ previewVisible: true });
    }
    clearForm() {
        this.setState({ flushed: !this.state.flushed });
    }
    onPost = (data) => {
        localStorage.setItem("formData", JSON.stringify(data))
    }
    render() {
        var builderVisible = this.state.previewVisible ? 'hidden' : '';
        var formData = this.state.data.task_data ? this.state.data.task_data : [];
        return (
            <div>
                <div className={`page ${builderVisible}`}>
                    <div className="toolbar">
                        <Toolbar clearForm={this.clearForm} showPreview={this.showPreview} data={this.state.data} />
                    </div>
                    <div className="gui-builder">
                        <ReactFormBuilder
                            data={formData}
                            onPost={this.onPost} />
                    </div>
                </div>
                <div className="FormGenerated">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactFormGenerator
                                read_only={true}
                                hide_actions={true}
                                data={formData} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GUIBuilder;