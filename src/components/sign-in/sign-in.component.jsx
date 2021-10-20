import React, { Component } from 'react'

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''

        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email:"", password:""})
    }

    handleChange = (e) => {
        const [value, name] = e.target
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="email" type="email" value={this.state.email} required />
                    <label >Email</label>
                    <input onChange={this.handleChange} name="password"  type ="password" value={this.state.password} required />
                    <label >Password</label>
                    <input type="submit" value = "Submit Form"/>
                </form>
            </div>
        )
    }
}

export default SignIn
