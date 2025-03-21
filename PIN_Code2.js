const pinCodeRegex = /^[1-9][0-9]{5}$/;

const testCases = ["400088", "A400088", "#123456", "560001", "12345", "000000", "40008A"];

testCases.forEach(pin => {
    console.log(`${pin}: ${pinCodeRegex.test(pin)}`);
});
