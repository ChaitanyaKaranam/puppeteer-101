import React, { Component } from 'react';

class Submit extends Component{

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
    
    renderSubmit(){
        if(!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.message){
            return (
                <>
                    <button className="btn waves-effect waves-light blue-grey darken-4" disabled>Submit</button>
                    &nbsp;&nbsp;
                    <button className="btn waves-effect waves-light blue-grey lighten-5 black-text" onClick={() => {
                        this.setState({
                            firstName: "",
                            lastName: "",
                            email: "",
                            message: "",
                            submitted: false
                        })
                    }}>Clear</button>
                </>
            )
        }else{
            return(
                <>
                    <button className="btn waves-effect waves-light blue-grey darken-4" onClick={() => {
                            this.setState({ submitted: true });
                            this.props.formData({
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                email: this.state.email,
                                message: this.state.message,
                                submitted: this.state.submitted
                            })
                    }}>Submit</button>
                    &nbsp;&nbsp;
                    <button className="btn waves-effect waves-light blue-grey lighten-5 black-text" onClick={() => {
                        this.setState({
                            firstName: "",
                            lastName: "",
                            email: "",
                            message: "",
                            submitted: false
                        })
                    }}>Clear</button>
                </>
            )
        }
    }

    render(){
        return(
           <>
            <h5>Submit Form</h5>
            <input type="text" placeholder="Enter First Name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })}/>
            <input type="text" placeholder="Enter Last Name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })}/>
            <input type="email" className="validate" placeholder="Enter Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
            <input type="text" placeholder="Enter Message" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })}/>
            <br/><br/>
            {this.renderSubmit()}
           </>
        )
    }
}

export default Submit;