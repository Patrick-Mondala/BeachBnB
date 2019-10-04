import React from 'react';
import {Redirect, Link} from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(() => (this.props.history.push('/')), 
        this.setState({username: '', password: ''}));
    }

    update(field) {
        return event => this.setState({ [field]: event.target.value });
    }

    render() {
        if (this.props.loggedIn){
          return <Redirect to='/' />  
        } else {
            return (
                <div>
                    <h2>{this.props.formType}</h2>
                    {this.props.formType === 'login' ? <Link to='/signup'>Sign up</Link> : 
                    <Link to='/login'>Log in</Link>}
                    <ul>
                        { (this.props.errors) ? this.props.errors.map(error => ( <li key={error}>{error}</li>)) : null }
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username
                            <input type="text" value={this.state.username} onChange={this.update("username")} />
                        </label>
                        <label>
                            Password
                            <input type="password" value={this.state.password} onChange={this.update("password")}/>
                        </label>
                        <input onClick={this.handleSubmit} type="submit"/>
                    </form>
                </div>
            )
        }
    }
};