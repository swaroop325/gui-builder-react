
import React from 'react'
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import Toolbar from './toolbar'

class GUIBuilder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
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
    closeForm() {
        this.setState({ previewVisible: false });
    }
    clearForm() {
        this.setState({ data: [] });
    }
    onPost = (data) => {
        localStorage.setItem("formData", JSON.stringify(data))
        this.setState({ data: data });

    }
    render() {
        var formData = this.state.data.task_data ? this.state.data.task_data : [];
        var builderVisible = this.state.previewVisible ? 'hidden' : '';
        var formVisible = this.state.previewVisible ? '' : 'hidden';

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
                <div className={`FormGenerated ${formVisible}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactFormGenerator
                                read_only={true}
                                hide_actions={true}
                                data={formData} />
                            <button className="btn btn-primary closeBtn" style={{ marginRight: '10px' }} onClick={this.closeForm.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GUIBuilder;