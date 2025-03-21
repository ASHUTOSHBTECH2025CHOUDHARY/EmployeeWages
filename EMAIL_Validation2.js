const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.[a-zA-Z]{2,}$/;

const testCases = [
    "abc@bridgelabz.com",
    "abc.xyz@bridgelabz.in"
];

testCases.forEach(email => {
    console.log(`${email}: ${emailRegex.test(email)}`);
});
