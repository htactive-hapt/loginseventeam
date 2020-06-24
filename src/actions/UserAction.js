const url = 'https://town-house-api-seven-team.herokuapp.com/api/'

function userLogin(username, password) {
    const data = {
        username: username,
        password: password
    }

    fetch(`${url}users/sign-in`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then((result) => {
            localStorage.setItem("user", JSON.stringify(result));
            localStorage.setItem('token', result.token)
        })
        .catch(error => console.error('Error: ', error))
}

function userRegister(user) {
    const data = user
    fetch(`${url}users/sign-up`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then((result) => {
            if (result.message === "API đã thực hiện thất bại.") {
                alert('Đăng ký thực hiện thất bại')
            }
        })
        .catch(error => console.error('Error: ', error))
}

function logout() {
    localStorage.removeItem("user");
};

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
};

// export { logout }
// export { userLogin }
// export { userRegister }
// export { getCurrentUser }

export { 
    getCurrentUser, 
    logout, 
    userLogin, 
    userRegister 
}

