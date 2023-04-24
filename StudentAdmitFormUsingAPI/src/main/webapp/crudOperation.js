// Get Values From Form
function readFormData() { //no need to change...
    var formData = {};
    formData["firstName"] = getFirstName();
    formData["lastName"] = getLastname();
    formData["email"] = getEmail();
    formData["phoneNo"] = getPhoneNo();
    formData["dob"] = getDob();
    formData["gender"] = getGender();
    formData['address'] = getAddress();
    formData["state"] = getState();
    formData['program'] = getProgram();
    formData['dept'] = getDept();
    formData["etNo"] = getEtNo();
    formData["totalMarks"] = getTotalMarks();
    return formData;
}

// Insert New Record
function insertNewRecord(data,ID) { //need to change
    data["id"] = ID;
    fetch('http://localhost:3000/api/studentRecords/create', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        newRow.insertCell(0).innerHTML = data.id;
        newRow.insertCell(1).innerHTML = data.firstName;
        newRow.insertCell(2).innerHTML = data.lastName;
        newRow.insertCell(3).innerHTML = data.email;
        newRow.insertCell(4).innerHTML = data.phoneNo;
        newRow.insertCell(5).innerHTML = data.dob;
        newRow.insertCell(6).innerHTML = data.gender;
        newRow.insertCell(7).innerHTML = data.address;
        newRow.insertCell(8).innerHTML = data.state;
        newRow.insertCell(9).innerHTML = data.program;
        newRow.insertCell(10).innerHTML = data.dept;
        newRow.insertCell(11).innerHTML = data.etNo;
        newRow.insertCell(12).innerHTML = data.totalMarks;
        cell13 = newRow.insertCell(13);
        cell13.innerHTML = `<a onClick="onEdit(this)" style="color:white;">Edit</a>
        <a onClick="onDelete(this)" style="color:white;">Delete</a>`;
    })
    .catch(error => console.error(error))
}

// Reset Function
function resetForm() { //no change needed
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
function onEdit(td) {  //need to change
    selectedDataRow = td.parentElement.parentElement;
    let id = selectedDataRow.cells[0].innerHTML;
    alert("selected Appl.ID is: " + id);
    fetch(`http://localhost:3000/api/studentRecords/get/`+id)
    .then(response => response.json())
    .then(data => {
        document.getElementById("firstName").value = data.firstName;
        document.getElementById("lastName").value = data.lastName;
        document.getElementById("email").value = data.email;
        document.getElementById("phoneNo").value = data.phoneNo;
        document.getElementById("dob").value = data.dob;
        document.getElementById("gender").value = data.gender;
        document.getElementById("address").value = data.address;
        document.getElementById("state").value = data.state;
        document.getElementById("program").value = data.program;
        document.getElementById("dept").value = data.dept;
        document.getElementById("etNo").value = data.etNo;
        document.getElementById("totalMarks").value = data.totalMarks;
    })
    .catch(error => console.error(error))
}

// Update Record
function updateRecord(data) {
    alert("selected Row is: " + selectedDataRow.rowIndex);
    let id = selectedDataRow.cells[0].innerHTML;
    selectedDataRow.cells[1].innerHTML = data.firstName;
    selectedDataRow.cells[2].innerHTML = data.lastName;
    selectedDataRow.cells[3].innerHTML = data.email;
    selectedDataRow.cells[4].innerHTML = data.phoneNo;
    selectedDataRow.cells[5].innerHTML = data.dob;
    selectedDataRow.cells[6].innerHTML = data.gender;
    selectedDataRow.cells[7].innerHTML = data.address;
    selectedDataRow.cells[8].innerHTML = data.state;
    selectedDataRow.cells[9].innerHTML = data.program;
    selectedDataRow.cells[10].innerHTML = data.dept;
    selectedDataRow.cells[11].innerHTML = data.etNo;
    selectedDataRow.cells[12].innerHTML = data.totalMarks;

    fetch('http://localhost:3000/api/studentRecords/update/'+id, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error(error))
}

// Delete Function
function onDelete(td) {
    if (confirm('Are you sure ,you want to delete this record... ?')) {
        row = td.parentElement.parentElement;
        let id = row.cells[0].innerHTML;
        alert("deleting Appl.ID: " + id);
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        fetch('http://localhost:3000/api/studentRecords/delete/'+id, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json()) 
        .then(response => console.log(response))
        resetForm();
    }
}