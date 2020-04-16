import React from 'react'
import axios from 'axios'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            registerMode: false
        }
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    toggleRegisterMode(){
        this.setState({
            registerMode: !this.state.registerMode
        })
    }

    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async login(){
        const {email, password} = this.state
        const user = await axios.post('/auth/login', {email, password}).catch(err => console.log(err))
        console.log("from login: ", user.data)
    }

    async register(){
        const {email, password, username} = this.state
        const user = await axios.post('/auth/register', {username, email, password}).catch(err => console.log(err))
        console.log("from register: ", user.data)
    }

    render(){
        return <div>
            {
                (this.state.registerMode)
                ?
                <div className="login">
                    <input placeholder="Email" type="text" name="email" value={this.state.email} onChange={ e => this.changeHandler(e)}/>
                    <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={ e => this.changeHandler(e)}/>
                    <button onClick={this.login}>Login</button>
                    <button onClick={() => this.toggleRegisterMode()}>Need an account?</button>
                </div>
                :
                <div className="register">
                    <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={ e => this.changeHandler(e)}/>
                    <input placeholder="Email" type="text" name="email" value={this.state.email} onChange={ e => this.changeHandler(e)}/>
                    <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={ e => this.changeHandler(e)}/>
                    <button onClick={this.register}>Register Account</button>
                    <button onClick={() => this.toggleRegisterMode()}>I am a member!</button>
                </div>
            }
        </div>
    }
}