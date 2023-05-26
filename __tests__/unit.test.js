// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// TESTS FOR isPhoneNumber
test('checks that 123 456 7890 is an invalid phone number', () => {
    expect(functions.isPhoneNumber("123 456 7890")).toBe(false);
});
test('checks that 1 is an invalid phone number', () => {
    expect(functions.isPhoneNumber("1")).toBe(false);
});

test('checks that (123)-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});
test('checks that 123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

// TESTS FOR isEmail
test('checks that ohuynh@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("ohuynh@ucsd.edu")).toBe(true);
});
test('checks that test@gmail.com is a valid email', () => {
    expect(functions.isEmail("test@gmail.com")).toBe(true);
});
test('checks that @gmail.com is an invalid email', () => {
    expect(functions.isEmail("@gmail.com")).toBe(false);
});
test('checks that gmail.@com is an invalid email', () => {
    expect(functions.isEmail("gmail.@com")).toBe(false);
});

//TESTS FOR isStrongPassword
test('checks that abcd is a strong password', () => {
    expect(functions.isStrongPassword("abcd")).toBe(true);
});
test('checks that PaSs_WoRd is a strong password', () => {
    expect(functions.isStrongPassword("PaSs_WoRd")).toBe(true);
});
test('checks that a is a weak password', () => {
    expect(functions.isStrongPassword("a")).toBe(false);
});
test('checks that qwertyuiopasdfghjkklzxcvbnm is a weak password', () => {
    expect(functions.isStrongPassword("qwertyuiopasdfghjkklzxcvbnm")).toBe(false);
});

//TESTS FOR isDate
test('checks that 01/01/2001 is a valid date', () => {
    expect(functions.isDate("01/01/2001")).toBe(true);
});
test('checks that 1/1/2001 is a valid date', () => {
    expect(functions.isDate("1/1/2001")).toBe(true);
});
test('checks that 1/1/01 is an invalid date', () => {
    expect(functions.isDate("1/1/01")).toBe(false);
});
test('checks that May 4, 2023 is an invalid date', () => {
    expect(functions.isDate("May 4, 2023")).toBe(false);
});

//TESTS for isHexColor
test('checks that #588adb is a valid hexcolor', () => {
    expect(functions.isHexColor("#588adb")).toBe(true);
});
test('checks that #FFFFFF is a valid hexcolor', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});
test('checks that 588adbc is an invalid hexcolor', () => {
    expect(functions.isHexColor("588adbc")).toBe(false);
});
test('checks that #FFFFF is an invalid hexcolor', () => {
    expect(functions.isHexColor("#FFFFF")).toBe(false);
});