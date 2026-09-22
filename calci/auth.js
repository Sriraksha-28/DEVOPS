const users = [];

function signup(name, email, password) {
    const user = users.find(u => u.email === email);

    if (user) {
        return {
            success: false,
            message: "User already exists"
        };
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    return {
        success: true,
        message: "Signup successful"
    };
}

function login(email, password) {
    const user = users.find(u => u.email === email);

    if (!user) {
        return {
            success: false,
            message: "User not found"
        };
    }

    if (user.password !== password) {
        return {
            success: false,
            message: "Invalid password"
        };
    }

    return {
        success: true,
        message: "Login successful"
    };
}

module.exports = { signup, login };