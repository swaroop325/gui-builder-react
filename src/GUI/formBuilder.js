
import React from 'react'
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import Toolbar from './toolbar'
import ParticlesBg from 'particles-bg'

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
    componentDidCatch(){
        localStorage.clear();
        window.location.reload();
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
        window.location.reload();
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
                <ParticlesBg type="fountain" bg={true} />
                <div className={`page ${builderVisible}`}>
                    <div className="toolbar">
                        <Toolbar clearForm={this.clearForm} showPreview={this.showPreview}
                            data={formData} />
                    </div>
                    <div className="gui-builder">
                        <ReactFormBuilder
                            data={formData}
                            onPost={this.onPost} />
                    </div>
                </div>
                <div className={`formGenerated ${formVisible}`}>
                    <div className="modal-dialog form-generated">
                        <div className="modal-content generated">
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