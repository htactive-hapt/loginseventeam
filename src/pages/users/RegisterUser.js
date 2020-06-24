import React, { Component } from 'react'
import { RegisterForm } from '../../components/users/RegisterForm';

const RegisterUser = (props) => {
    const [user, setUser] = useState({
        email: '',
        fullName: '',
        password: '',
        phone: '',
        username: ''
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (user.email && user.fullName && user.password && user.phone && user.username) {
            userRegister(user);
        }
    }
    return (
        <RegisterForm user={user} onSubmit={handleSubmit} />
    )
}
