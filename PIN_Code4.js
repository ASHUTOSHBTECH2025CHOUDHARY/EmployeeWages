const pinCodeRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;

const testCases = [
    "400088",
    "400 088",
    "A400088",
    "#123456",
    "560001",
    "560 001",
    "12345",
    "000000",
    "40008A",
    "400088B",
    "123 456#",
    "40@0088"
];

testCases.forEach(pin => {
    console.log(`${pin}: ${pinCodeRegex.test(pin)}`);
});
