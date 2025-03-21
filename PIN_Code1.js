const pinCodeRegex = /^[1-9][0-9]{5}$/;

const testCases = ["400088", "oin code400088", "12345", "000000", "560001"];

testCases.forEach(pin => {
    console.log(`${pin}: ${pinCodeRegex.test(pin)}`);
});
