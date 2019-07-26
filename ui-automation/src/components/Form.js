import React, { Component } from 'react';
import Submit from './Submit';
import FormData from './FormData';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            submitted: false
        }
    }

    render() {
        return (
            <div className="customForm">
                <div className="row">
                    <div className="col s12 l6">
                        <div className="card">
                            <Submit formData={(newState) => {
                                this.setState({
                                    firstName: newState.firstName,
                                    lastName: newState.lastName,
                                    email: newState.email,
                                    // message: newState.message,
                                    submitted: newState.submitted
                                })
                            }}/>
                        </div>
                    </div>
                    <div className="col s12 l6">
                        <div className="card">
                            <FormData 
                                firstName={this.state.firstName} 
                                lastName={this.state.lastName}
                                // email={this.state.email}  
                                message={this.state.message}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Form;