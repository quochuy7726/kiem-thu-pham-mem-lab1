const { login } = require("./login");

describe("Login function", () => {

    test("Đăng nhập đúng", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Sai username", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Sai password", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Sai cả username và password", () => {
        expect(login("user", "456")).toBe(false);
    });

});
