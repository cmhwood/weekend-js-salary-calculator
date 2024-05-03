onReady();

function onReady() {
  console.log('Javascript is working');
}
totalMonthly = 0;

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
  document.getElementById('table-body').innerHTML += `
  <tr>
  <td>${firstName.value}</td>
  <td>${lastName.value}</td>
  <td>${empId.value}</td>
  <td>${empTitle.value}</td>
  <td>${annualSalary.value}</td>
  <td><button onclick='deleteEmployee(event)'></button></td>
  </tr>
  `;

  // firstName.value = '';
  // lastName.value = '';
  // empId.value = '';
  // empTitle = '';
  // annualSalary = '';
}

function deleteEmployee(event) {
  event.target.closest('tr').remove();
}
