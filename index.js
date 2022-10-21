const inquirer = require("inquirer");
const generateHTML = require('./src/generatedhtml');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');
const fs = require('fs'); 
const employeeArray = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            name: "name",
            type: "input",
            message: "What is the manager's name?", 
        },
        {
            name: "id",
            type: "input",
            message: "What is the manager's ID number?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email address?."
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?",
        }
    ])
    .then(managerInfo => {
        const  { name, id, email, officeNumber } = managerInfo; 
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {

    return inquirer.prompt ([
        {
            name: "role",
            type: "list",
            message: "Select the employee's role.",
            choices: ["Engineer", "Intern", "Manager"]
        },
        {
            name: "name",
            type: "input",
            message: "What is the employee's name?", 
        },
        {
            name: "id",
            type: "input",
            message: "What is the employee's ID number?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the employee's email address?",
        },
        {
            when: (input) => input.role === "Engineer",
            name: "github",
            type: "input",
            message: "What is the engineer's github?",
        },
        {
            when: (input) => input.role === "Intern",
            name: "school",
            type: "input",
            message: "What is the intern's school?",
        },
        {
            when: (input) => input.role === "Manager",
            name: "office-number",
            type: "input",
            message: "What is the manager's office number?",
        },

        {
            name: "confirmAddEmployee",
            type: "confirm",
            message: "Would you like to add another team member?",
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, officeNumber, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }
        else if (role === "Manager") {
            employee = new Manager (name, id, email, officeNumber);

            console.log(employee);
        }

        employeeArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(employeeArray); 
        } else {
            return employeeArray;
        }
    })

};

 
const writetoFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Congratulations! Your team profile has been generated!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(employeeArray => {
    return generateHTML(employeeArray);
  })
  .then(pageHTML => {
    return writetoFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });