import React, {Component} from 'react'

class Login extends Component {

    state = {
        login : '',
        password : '',
        wrong : false,
    }

    log = (e) => {
        this.setState({
            login : e.target.value
        })
    }

    pass = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    render() {
        const login = (e) => {
            e.preventDefault();
            if (this.state.login === 'Admin' && this.state.password === '12345'){
                this.props.logIn();
                this.setState({
                    wrong : false
                })
            }
         else this.setState({
                wrong : true
            })
        }

        if (this.props.isLogged) return <p>You successfully logged in</p>
            return (
                <form onSubmit={login}>
                    <div className="row">
                        <div className="login col-md-3">
                            <p>Login</p>
                            <input type="text" placeholder="type your login..." onChange={this.log}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <p>Password</p>
                            <input type="text" placeholder="type your password..." onChange={this.pass}/>
                        </div>
                    </div>
                    <p style={{display : this.state.wrong ? '' : 'none'}}>You typed wrong data</p>
                    <input type="submit" placeholder="Enter"/>
                </form>
            )
        }

}

export default Login