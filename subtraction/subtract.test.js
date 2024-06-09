const subtract = require("./subtract")

test("subtract 5 - 3", () => {
    expect(subtract(5, 3)).toBe(2);
});