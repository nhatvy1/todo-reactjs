import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 1, title: 'Front-end Developer', salary: '500' },
            { id: 1, title: 'Back-end Developer', salary: '700' },
            { id: 1, title: 'Software Engineer', salary: '1000' }
        ]
    }
    render() {
        return (
            <>
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent