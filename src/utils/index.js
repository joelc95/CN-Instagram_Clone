export const createUser = async(username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username: username,
                email: email,
                password: password
            })
        });

        const data = await response.json();
        setter(data.user);
        console.log(`new user: ${data.user}`)
        localStorage.setItem('myToken', data.token);
    } catch (error) {
        console.log(error);
    }
}

export const login = async(username, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username: username,
                password: password
            })
        });

        const data = await response.json();
        setter(data.user);
        localStorage.setItem('myToken', data.token);
        console.log(data.user)
    } catch (error) {
        console.log(error)
    }
}

export const tokenLogin = async(setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {'Authorization': `Bearer ${localStorage.getItem("myToken")}`}
        })
        console.log("TOKEN LOGIN")
        const data = await response.json();
        setter(data.user);
        console.log(`user: ${data.user}`)
    } catch (error) {
        console.log(error);
    }
}

export const logout = async() => {
    try {
        console.log('log out')
        localStorage.clear();
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}

export const deleteAccount = async(user) => {
    try {
        await fetch(`${process.env.REACT_APP_REST_API}user/${user}`, {
            method: "DELETE",
            headers: {'Authorization': `Bearer ${localStorage.getItem("myToken")}`,}
        })
        localStorage.clear();
        window.location.reload();
        // await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const updatePassword = async(newPassword) => {
    try {
        await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("myToken")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: newPassword
            })
        })
    } catch (error) {
        console.log(error);
    }
}