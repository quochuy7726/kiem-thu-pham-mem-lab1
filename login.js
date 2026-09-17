function login(username, password) {
    return username === "admin" && password === "123";
}

if (typeof module !== "undefined") {
    module.exports = { login };
}
