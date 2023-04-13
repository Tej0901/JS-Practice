var selectedDataRow = null

// Form Submit Function
function onFormSubmit() 
{
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedDataRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else{
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}

// Get Values From Form
function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["dob"] = document.getElementById('dob').value;
    formData["gender"] = document.getElementById('gender').value;
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
    cell7.innerHTML = data.etNo;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.totalMarks;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)" style="color:white;">Edit</a>
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
    document.getElementById("etNo").value = selectedDataRow.cells[6].innerHTML;
    document.getElementById("totalMarks").value = selectedDataRow.cells[7].innerHTML;
}

// Update Record
function updateRecord(formData) {
    selectedDataRow.cells[0].innerHTML = formData.firstName;
    selectedDataRow.cells[1].innerHTML = formData.lastName;
    selectedDataRow.cells[2].innerHTML = formData.email;
    selectedDataRow.cells[3].innerHTML = formData.phoneNo;
    selectedDataRow.cells[4].innerHTML = formData.dob;
    selectedDataRow.cells[5].innerHTML = formData.gender;
    selectedDataRow.cells[6].innerHTML = formData.etNo;
    selectedDataRow.cells[7].innerHTML = formData.totalMarks;
    
}

// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

//firstName validation function
function isFirstNameValid(firstName)
{
	let isValid = true;
	if (firstName == "") {
        isValid = false;
        document.getElementById("firstNamevalidationError").classList.remove("hide");
    } else {
        let regex=/^[a-zA-Z\s]+$/; 
        if(regex.test(firstName) == false){
            isValid = false;
        document.getElementById("firstNamevalidationError").classList.remove("hide");
        }
        else{
        	isValid = true;
        	if (!document.getElementById("firstNamevalidationError").classList.contains("hide"))
        	{
           	 document.getElementById("firstNamevalidationError").classList.add("hide");
        	}
    	}
	}
	return isValid;
}

//lastName validation function
function isLastNamevalid(lastName)
{
	let isValid = true;
	if (lastName == "") {
        isValid = false;
        document.getElementById("lastNamevalidationError").classList.remove("hide");
    } else {
        let regex=/^[a-zA-Z\s]+$/; 
        if(regex.test(lastName) == false){
            isValid = false;
        document.getElementById("lastNamevalidationError").classList.remove("hide");
        }
        else{
        	isValid = true;
        	if (!document.getElementById("lastNamevalidationError").classList.contains("hide"))
        	{
          	  document.getElementById("lastNamevalidationError").classList.add("hide");
        	}
    	}
	}
	return isValid;
}

//Email validation function
function isEmailValid(email)
{
	let isValid = true;
	if (email == "") {
        isValid = false;
        document.getElementById("emailvalidationError").classList.remove("hide");
    } else {
        let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        if(regex.test(email) == false){
            isValid = false;
        document.getElementById("emailvalidationError").classList.remove("hide");
        }
        else{
        	isValid = true;
        	if (!document.getElementById("emailvalidationError").classList.contains("hide"))
        	{
          	  document.getElementById("emailvalidationError").classList.add("hide");
        	}
    	}
	}
	return isValid;
}

//phoneNo validation function
function isPhoneNoValid(phoneNo)
{
	let isValid = true;
	if (phoneNo == "") {
        isValid = false;
        document.getElementById("phoneNovalidationError").classList.remove("hide");
    } else {
        let regex= /^(0|91)?[6-9][0-9]{9}$/;
        if(regex.test(phoneNo) == false){
            isValid = false;
        document.getElementById("phoneNovalidationError").classList.remove("hide");
        }
        else{
        	isValid = true;
        	if (!document.getElementById("phoneNovalidationError").classList.contains("hide"))
        	{
          	  document.getElementById("phoneNovalidationError").classList.add("hide");
        	}
    	}
	}
	return isValid;
}

//Date Of Birth Validation Function
function isDobvalid(dob)
{
	let isValid = true;
	if(dob == "")
	{
		isValid = false;
		document.getElementById("dobValidationError").classList.remove("hide");
	}
	else{
		isValid = true;
		if(!document.getElementById("dobValidationError").classList.contains("hide"))
		{
			document.getElementById("dobValidationError").classList.add("hide");
		}
	}
	return isValid;
}

//Gender Validation
function isGendervalid(gender)
{
	let isValid = true;
	if(gender == "")
	{
		isValid = false;
		document.getElementById("genderValidationError").classList.remove("hide");
	}
	else{
		isValid = true;
		if(!document.getElementById("genderValidationError").classList.contains("hide"))
		{
			document.getElementById("genderValidationError").classList.add("hide");
		}
	}
	return isValid;
}

//Enrollment No. validation function
function isEtNoValid(etNo)
{
	let isValid = true;
	if (etNo == "") {
        isValid = false;
        document.getElementById("etNovalidationError").classList.remove("hide");
    } else {
        let regex= /^[2][3][0-9]{6}[1-9]$/;
        if(regex.test(etNo) == false){
            isValid = false;
        document.getElementById("etNovalidationError").classList.remove("hide");
        }
        else{
        	isValid = true;
        	if (!document.getElementById("etNovalidationError").classList.contains("hide"))
        	{
          	  document.getElementById("etNovalidationError").classList.add("hide");
        	}
    	}
	}
	return isValid;
}

//getters for student details
function getFirstName()
{
	const firstName = document.getElementById("firstName").value;
	return firstName;
}

function getLastname()
{
	const lastName = document.getElementById("lastName").value;
	return lastName;
}

function getEmail()
{
	const email = document.getElementById("email").value;
	return email;
}

function getPhoneNo()
{
	const phoneNo = document.getElementById("phoneNo").value;
    return phoneNo;
}

function getDob()
{
	const dob = document.getElementById("dob").value;
	return dob;
}

function getgender()
{
	const gender = document.getElementById("gender").value;
	return gender;
}

function getEtNo()
{
	const etNo = document.getElementById("etNo").value;
	return etNo;
}


// Check User validation
function validate() 
{
	//getting the details
    let firstName = getFirstName();
    let lastName = getLastname();
    let email = getEmail();
    let phoneNo = getPhoneNo();
    let dob = getDob();
    let gender = getgender();
    let etNo = getEtNo();
    
    
    
    // FirstName validation
    let firstNameValidity = isFirstNameValid(firstName);
    // LastName validation
    let lastNameValidity = isLastNamevalid(lastName);
    // email validation
    let emailvalidity = isEmailValid(email);
    // phone number validation
    let phoneNovalidity = isPhoneNoValid(phoneNo);
    // DOB validation
    let dobvalidity = isDobvalid(dob);
    // Gender Validation
    let genderValidity = isGendervalid(gender);
    // Enrollment Number validation
    let etNoValidity  =  isEtNoValid(etNo);
    
    //validate all of them
    if(firstNameValidity && lastNameValidity && emailvalidity && phoneNovalidity && dobvalidity && genderValidity && etNoValidity)
    {
		return true;
	}
	else
	{
		return false;
	}  
}