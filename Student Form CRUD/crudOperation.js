// Get Values From Form
function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["dob"] = document.getElementById('dob').value;
    formData["gender"] = document.getElementById('gender').value;
    formData['address'] = document.getElementById('address').value;
    formData["state"] = document.getElementById('state').value;
    formData['program'] = document.getElementById('program').value;
    formData['dept'] = document.getElementById('dept').value;
    formData["etNo"] = document.getElementById("etNo").value;
    formData["totalMarks"] = document.getElementById("totalMarks").value;
    return formData;
}

// Insert New Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phoneNo;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dob;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gender;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.address;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.state;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.program;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.dept;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.etNo;
    cell12 = newRow.insertCell(11);
    cell12.innerHTML = data.totalMarks;
    cell13 = newRow.insertCell(12);
    cell13.innerHTML = `<a onClick="onEdit(this)" style="color:white;">Edit</a>
    <a onClick="onDelete(this)" style="color:white;">Delete</a>`;
}

// Reset Function
function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById('address').value = "";
    document.getElementById('state').value = "";
    document.getElementById('program').value = "";
    document.getElementById('dept').value = "";
    document.getElementById("etNo").value = "";
    document.getElementById("totalMarks").value = "";
    selectedDataRow = null;
}

// Edit Function
function onEdit(td) {
    selectedDataRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedDataRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedDataRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedDataRow.cells[2].innerHTML;
    document.getElementById("phoneNo").value = selectedDataRow.cells[3].innerHTML;
    document.getElementById("dob").value = selectedDataRow.cells[4].innerHTML;
    document.getElementById("gender").value = selectedDataRow.cells[5].innerHTML;
    document.getElementById("address").value = selectedDataRow.cells[6].innerHTML;
    document.getElementById("state").value = selectedDataRow.cells[7].innerHTML;
    document.getElementById("program").value = selectedDataRow.cells[8].innerHTML;
    document.getElementById("dept").value = selectedDataRow.cells[9].innerHTML;
    document.getElementById("etNo").value = selectedDataRow.cells[10].innerHTML;
    document.getElementById("totalMarks").value = selectedDataRow.cells[11].innerHTML;
}

// Update Record
function updateRecord(formData) {
    selectedDataRow.cells[0].innerHTML = formData.firstName;
    selectedDataRow.cells[1].innerHTML = formData.lastName;
    selectedDataRow.cells[2].innerHTML = formData.email;
    selectedDataRow.cells[3].innerHTML = formData.phoneNo;
    selectedDataRow.cells[4].innerHTML = formData.dob;
    selectedDataRow.cells[5].innerHTML = formData.gender;
    selectedDataRow.cells[6].innerHTML = formData.address;
    selectedDataRow.cells[7].innerHTML = formData.state;
    selectedDataRow.cells[8].innerHTML = formData.program;
    selectedDataRow.cells[9].innerHTML = formData.dept;
    selectedDataRow.cells[10].innerHTML = formData.etNo;
    selectedDataRow.cells[11].innerHTML = formData.totalMarks;
    
}

// Delete Function
function onDelete(td) {
    if (confirm('Are you sure ,you want to delete this record... ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}