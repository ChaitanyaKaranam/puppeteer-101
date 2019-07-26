import React, { Component } from 'react';

class FormData extends Component {
    render() {
        return (
            <>
                <h5>Form Data</h5>
                <pre className="black white-text">
                    {JSON.stringify({
                        firstName: this.props.firstName,
                        lastName: this.props.lastName,
                        email: this.props.email,
                        message: this.props.message
                    }, null, 2)}
                </pre>
                <br/>
                <br/>
            </>
        );
    }
}

export default FormData;