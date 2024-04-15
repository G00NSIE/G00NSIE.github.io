
let persons = [];
let salaries = [];

// Function to add a person and salary
function addSalary() {
 
    let personField = document.getElementById('person');
    let salaryField = document.getElementById('salary');
    let person = document.getElementById('person').value;
    let salary = document.getElementById('salary').value;

    // Data validation
    if (person === '' || salary === '' || isNaN(salary)) {
        alert('Invalid input. Please enter a name and a numeric value for the salary.');
        return;
    }

    // Add to arrays
    persons.push(person);
    salaries.push(salary);


    updateDropdown();

    

    // Move cursor to the name field
    document.getElementById('person').focus();

    //clear text from field
    personField.value = '';
    salaryField.value = '';
}

function updateDropdown() {
    let dropdown = document.getElementById('modifyPerson');
    dropdown.innerHTML = ''; // Clear dropdown

    // Add options to dropdown
    for (let i = 0; i < persons.length; i++) {
        let option = document.createElement('option');
        option.text = persons[i];
        dropdown.add(option);
    }
}

// Function to modify a salary
function modifySalary() {
    let person = document.getElementById('modifyPerson').value;
    let newSalary = document.getElementById('newSalary').value;

    // Data validation
    if (person === '' || newSalary === '' || isNaN(newSalary)) {
        alert('Invalid input. Please select a name and enter a numeric value for the new salary.');
        return;
    }

    // Find person in array and modify salary
    let index = persons.indexOf(person);
    if (index !== -1) {
        salaries[index] = newSalary;
    }
}

// Function to display results
function displayResults() {
    let sum = salaries.reduce((a, b) => Number(a) + Number(b), 0);
    let avg = sum / salaries.length;
    let max = Math.max(...salaries);

    document.getElementById('results').innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${avg}</p>
        <p>Highest Salary: ${max}</p>
    `;
}

// Function to display salaries
function displaySalaries() {
    let table = document.getElementById('results_table');
    table.innerHTML = ''; // Clear table

    // Add rows to table
    for (let i = 0; i < persons.length; i++) {
        let row = `
            <tr>
                <td>${persons[i]}</td>
                <td>${salaries[i]}</td>
            </tr>
        `;
        table.innerHTML += row;
    }
}