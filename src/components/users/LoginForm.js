import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { userLogin } from '../../actions/UserAction'

function LoginForm() {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;

    // useEffect(() => {
    //     userLogin(username, password)
    //     setSubmitted(false)
    // }, [submitted]);

    const history = useHistory()
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
        if (username && password) {
            userLogin(username, password)
            history.push('/home')
        }
    }
    
    return (
        <div className="login-container">
            < div className="form" >
                <form name="form" className='login-form' onSubmit={handleSubmit}>
                    <legend>Login</legend>
                    <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username" className={'login-input form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                    <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" className={'login-input form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                    <button className="btn btn-primary">Login</button>
                    <p className="message"> Not registered? <Link to="/register">  Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

export { LoginForm }