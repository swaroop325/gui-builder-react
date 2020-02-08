import React from 'react';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';

export default class FormGenerated extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [], reloaded: false };

        const update = this._onChange.bind(this);
        ElementStore.subscribe(state => update(state.data));
    }
    componentDidMount() {
        if (localStorage.getItem("formData")) {
            this.setState({ data: JSON.parse(localStorage.getItem("formData")) });
        } else {
            this.setState({ data: [] });
        }
    }
    _onChange(data) {
        this.setState({
            data: data
        });
    }
    render() {
        var formData = this.state.data.task_data ? this.state.data.task_data : [];
        return (
            <div className="FormGenerated">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ReactFormGenerator
                            read_only={true}
                            hide_actions={true}
                            data={formData} />
                    </div></div></div>
        );
    }
}
