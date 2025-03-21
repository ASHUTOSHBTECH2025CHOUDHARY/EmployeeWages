class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        // Validate id
        if (!Number.isInteger(params[0]) || params[0] <= 0) {
            throw new Error("ID must be a positive integer");
        }
        this.id = params[0];

        // Validate and set name (via setter)
        this.name = params[1];

        // Validate salary
        if (typeof params[2] !== "number" || params[2] < 0) {
            throw new Error("Salary must be a non-negative number");
        }
        this.salary = params[2];

        // Validate gender
        if (params[3] !== undefined && !["M", "F"].includes(params[3])) {
            throw new Error("Gender must be 'M' or 'F'");
        }
        this.gender = params[3];

        // Validate startDate
        if (params[4] !== undefined && !(params[4] instanceof Date) || isNaN(params[4])) {
            throw new Error("startDate must be a valid Date object");
        }
        this.startDate = params[4];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) {
        // More flexible regex: allows names like "Mary Jane" or "O'Connor"
        let nameRegex = RegExp("^[A-Z][a-zA-Z'-]+( [A-Z][a-zA-Z'-]+)*$");
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw new Error("Name is Incorrect! Must start with an uppercase letter and contain only letters, spaces, hyphens, or apostrophes.");
        }
    }

    // method
    toString() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender ?? "undefined"}, startDate=${empDate}`;
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
    console.log(employeePayrollData.toString());
    employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e.message);
}

try {
    let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e.message);
}