//operations should return sum of two numbers

const {addition, addOns} = require("./addition")

test("2 + 4 = 6", () => {
    expect(addition(2,4)).toBe(6)
})

test.skip("23 + 60 = 83", () => {
    expect(addition(23, 60)).toBe(83)
})

test.each([[3, 4, 7], [5, -10, -5], [0, 2, 2]])(
  'a + b = expected',
  (a, b, expected) => {
    expect(addition(a, b)).toBe(expected);
  }
);

//*********************EDITS*******************************
test("2 + 3 + 4 = 9", () => {
    expect(addOns(2, 3, 4)).toBe(9)
})

test.skip("11 + 12 + 10 = 33", () => {
    expect(addOns(11, 12, 10)).toBe(33)
})