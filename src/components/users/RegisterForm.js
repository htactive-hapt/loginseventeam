import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { userRegister } from '../../actions/UserAction'

function RegisterForm() {
    const [user, setUser] = useState({
        email: '',
        fullName: '',
        password: '',
        phone: '',
        username: ''
    });

    const history = useHistory()
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (user.email && user.fullName && user.password && user.phone && user.username) {
            if (!userRegister(user)) {
                history.push('/login')
            }
        }
    }

    return (
        <div className="login-container">
            <div className="form" >
                <form name="form" className='register-form' onSubmit={handleSubmit}>
                    <legend>Register</legend>
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email" className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                    <input type="text" name="fullName" value={user.fullName} onChange={handleChange} placeholder="Full name" className={'form-control' + (submitted && !user.fullName ? ' is-invalid' : '')} />
                    {submitted && !user.fullName &&
                        <div className="invalid-feedback">Full Name is required</div>
                    }
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                    <input type="number" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone number" className={'form-control' + (submitted && !user.phone ? ' is-invalid' : '')} />
                    {submitted && !user.phone &&
                        <div className="invalid-feedback">Phone is required</div>
                    }
                    <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                    <button className="btn btn-primary">Register</button>
                    <p className="message">Already registered? <Link to="/login" >Sign in</Link></p>
                </form>
            </div>
        </div>
    );
}

export { RegisterForm }