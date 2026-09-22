const { signup, login } = require("./auth");

test("signup should work", () => {
    const result = signup("Raksha", "raksha@gmail.com", "12345");

    expect(result.success).toBe(true);
});

test("duplicate signup should fail", () => {
    const result = signup("Raksha", "raksha@gmail.com", "12345");

    expect(result.success).toBe(false);
});

test("login should work", () => {
    const result = login("raksha@gmail.com", "12345");

    expect(result.success).toBe(true);
});

test("wrong password should fail", () => {
    const result = login("raksha@gmail.com", "wrong");

    expect(result.success).toBe(false);
});