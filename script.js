// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeeArray = [];

// Collect employee data
const collectEmployees = () =>{
  // TODO: Get user input to create and return an array of employee objects
  // const trackEmployeeData = () =>{
	let firstName = window.prompt("First Name");
	let lastName = window.prompt("Last Name");			
	let salary = window.prompt("Salary");

  

	const info = {
		firstName: firstName,
		lastName: lastName,
		salary: salary}
    
  
  employeeArray.push(info);
  let yes = window.confirm("Add another employee?");

  while(yes === true){
    collectEmployees();
    break;
  }
  return(employeeArray);
};




// Display the average salary
// DONE DONE DONE
// TODO: Calculate and display the average salary
const displayAverageSalary = () => {
	const salaries = employeeArray.filter(Number);
	
	let total = 0;	
	
	for(const number of salaries){
		if(isNaN()){
			number = 0;
		}
		total += (number);
	}
	
	const howMany = salaries.length;
	const average = total / howMany;
	console.log(average);
} //DONE DONE DONE






// Select a random employee
const getRandomEmployee = function(employeeArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
