onReady();

function onReady() {
  console.log('Javascript is working');

  // calculateMonthlyTotal(); // This will be the calculated monthly total
}
let employees = [];
let totalMonthly = 0;
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function addEmployee(event) {
  event.preventDefault();
  // console.log('employeeees');

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const empId = document.getElementById('emp-id');
  const empTitle = document.getElementById('emp-title');
  const annualSalary = document.getElementById('annual-salary');
  // console.log(
  //   `${firstName.value}, ${lastName.value}, ${empId.value}, ${empTitle.value}, ${annualSalary.value}`
  // );
  const newEmployee = {
    first: firstName.value,
    last: lastName.value,
    id: empId.value,
    title: empTitle.value,
    salary: Number(annualSalary.value),
  };

  employees.push(newEmployee);
  console.log('All employees: ', employees);

  document.getElementById('empInput').reset(); // reset the entire form using the form id (html)
  // firstName.value = '';
  // lastName.value = '';
  // empId.value = '';
  // empTitle = '';
  // annualSalary = '';

  renderEmployees();
  calculateMonthly();
}

function renderEmployees() {
  const tbodyElement = document.getElementById('table-body');
  tbodyElement.innerHTML = '';

  for (let i = 0; i < employees.length; i++) {
    document.getElementById('table-body').innerHTML += `
  <tr>
  <td>${employees[i].first}</td>
  <td>${employees[i].last}</td>
  <td>${employees[i].id}</td>
  <td>${employees[i].title}</td>
  <td>$${employees[i].salary}</td>
  <td><button class='delete-button' onclick='deleteEmployee(event)'>Delete</button></td>
  </tr>
  `;
    console.log('this is the salary: ', employees[i].salary);
  }
}

function deleteEmployee(event) {
  const removeEmp = event.target.id;
  employees.splice(Number(removeEmp), 1);
  // event.target.closest('tr').remove(); -- this will not reduce the monthly-salaries total

  renderEmployees();
  calculateMonthly();
}

function calculateMonthly() {
  let totalMonthly = 0;
  for (let i = 0; i < employees.length; i++) {
    totalMonthly = totalMonthly + employees[i].salary; // .salary comes from newEmployee
  }
  let dividedMonthly = totalMonthly / 12;
  console.log('total monthly:', USDollar.format(dividedMonthly));

  const monthlyElement = document.getElementById('monthly-salaries');
  if (totalMonthly > 20000) {
    (monthlyElement.innerText = `Total Monthly Salaries: ${USDollar.format(
      totalMonthly
    )}`),
      monthlyElement;
    document.getElementById('monthly-salaries').style.color = 'red';
  } else {
    (monthlyElement.innerText = `Total Monthly Salaries: ${USDollar.format(
      totalMonthly
    )}`),
      monthlyElement;
  }
}
