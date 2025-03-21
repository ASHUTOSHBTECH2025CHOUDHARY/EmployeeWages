const emailRegex = /^abc([._,+-][a-zA-Z0-9]+)?@bridgelabz\.co\.[a-zA-Z]{2,}$/;

const testCases = [
    "abc@bridgelabz.co.in",
    "abc.xyz@bridgelabz.co.in"
];

testCases.forEach(email => {
    console.log(`${email}: ${emailRegex.test(email)}`);
});
