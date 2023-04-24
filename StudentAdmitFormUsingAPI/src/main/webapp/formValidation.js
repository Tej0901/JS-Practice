//Error Message Function
function printErrorMsg(elementId, errorMsg)
{ 
    document.getElementById(elementId).innerHTML = errorMsg;
}

function ageCalculator(dob)
{
    let dateOfBirth = new Date(dob);
    let today = new Date();
    let age = Math.floor((today - dateOfBirth) / (365.25 * 24 * 60 * 60 * 1000));
    return age;
}

//firstName validation function
function isFirstNameValid(firstName)
{
	let isValid = true;
	if (firstName == "") {
        isValid = false;
        printErrorMsg("noFirstName","please enter your First Name"); 
    } else {
        let regex=/^[a-zA-Z\s]+$/; 
        if(regex.test(firstName) == false){
            isValid = false;
            printErrorMsg("noFirstName","please enter a valid First Name"); 
        }
        else{
        	isValid = true;
            printErrorMsg("noFirstName","");
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
        printErrorMsg("noLastName","please enter your Last Name"); 
    } else {
        let regex=/^[a-zA-Z\s]+$/; 
        if(regex.test(lastName) == false){
            isValid = false;
            printErrorMsg("noLastName","please enter a valid Last Name");
        }
        else{
        	isValid = true;
        	printErrorMsg("noLastName","");
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
        printErrorMsg("noEmail","please enter your Email Address");
    } else {
        let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        if(regex.test(email) == false){
            isValid = false;
            printErrorMsg("noEmail","please enter a valid Email");
        }
        else{
        	isValid = true;
        	printErrorMsg("noEmail","");
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
        printErrorMsg("noPhoneNo","please enter your Mobile Number");
    } else {
        let regex= /^(0|91)?[6-9][0-9]{9}$/;
        if(regex.test(phoneNo) == false){
            isValid = false;
            printErrorMsg("noPhoneNo","please enter a valid Mobile number");
        }
        else{
        	isValid = true;
        	printErrorMsg("noPhoneNo","");
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
		printErrorMsg("noDob","Please enter Your Date of Birth to proceed")
	}
	else{
		let age = ageCalculator(dob);
        if(age>=18 && age<=24)
        {
            isValid = true;
            printErrorMsg("noDob","");
        }
        else{
            isValid = false;
            printErrorMsg("noDob","Your Age Should Be in range of 18-24 !!!");
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
		printErrorMsg("noGender","Please Select Your Gender");
	}
	else{
		isValid = true;
		printErrorMsg("noGender","");
	}
	return isValid;
}

//Address Validation function
function isAddressValid(address)
{
    let isValid = true;
    if(address == "")
    {
        isValid = false;
        printErrorMsg("noAddress","Please Enter Your Current Address");
    }
    else{
        isValid = true;
        printErrorMsg("noAddress","");
    }
    return isValid;
}

//State validation functon
function isStateValid(state)
{
    let isValid = true;
    if(state == "")
    {
        isValid = false;
        printErrorMsg("noState","Please Select your State");
    }
    else{
        isValid = true;
        printErrorMsg("noState","");
    }
    return isValid;
}

//progarm validation functon
function isprogramvalid(program)
{
    let isValid = true;
    if(program == "")
    {
        isValid = false;
        printErrorMsg("noProgram","Please Select your preferred program");
    }
    else{
        isValid = true;
        printErrorMsg("noProgram","");
    }
    return isValid;
}

//Dept validation functon
function isDeptValid(dept)
{
    let isValid = true;
    if(dept == "")
    {
        isValid = false;
        printErrorMsg("noDept","Please Select your Preferred Dept.");
    }
    else{
        isValid = true;
        printErrorMsg("noDept","");
    }
    return isValid;
}

//Enrollment No. validation function
function isEtNoValid(etNo)
{
	let isValid = true;
	if (etNo == "") {
        isValid = false;
        printErrorMsg("noEtNo","Please Enter your Enrollment Number");
    } else {
        let regex= /^[2][3][0-9]{6}[1-9]$/;
        if(regex.test(etNo) == false){
            isValid = false;
            printErrorMsg("noEtNo","Please Enter a valid Enrollment No..");
        }
        else{
        	isValid = true;
        	printErrorMsg("noEtNo","");
    	}
	}
	return isValid;
}

//marks Validation
function isTotalMarksValid(totalMarks)
{
    let isValid = true;
    if(totalMarks == "")
    {
        isValid = false;
        printErrorMsg("noTotalMarks","Please Enter your Entrance Test Mark");
    }
    else{
        if(totalMarks>=0 && totalMarks<=100)
        {
            isValid = true;
            printErrorMsg("noTotalMarks","");
        }
        else{
            isValid = false;
            printErrorMsg("noTotalMarks","Please Enter a valid Test Marks");
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

function getGender()
{
	const gender = document.getElementById("gender").value;
	return gender;
}

function getAddress()
{
    const address = document.getElementById("address").value;
    return address;
}

function getState()
{
    const state = document.getElementById("state").value;
    return state;
}

function getProgram()
{
    const program = document.getElementById("program").value;
    return program;
}

function getDept()
{
    const dept = document.getElementById("dept").value;
    return dept;
}

function getEtNo()
{
	const etNo = document.getElementById("etNo").value;
	return etNo;
}

function getTotalMarks()
{
    const totalMarks = document.getElementById("totalMarks").value;
    return totalMarks;
}


// main validation function
function validate() 
{
    let firstName = getFirstName();
    let lastName = getLastname();
    let email = getEmail();
    let phoneNo = getPhoneNo();
    let dob = getDob();
    let gender = getGender();
    let address = getAddress();
    let state = getState();
    let program = getProgram();
    let dept = getDept();
    let etNo = getEtNo();
    let totalMarks = getTotalMarks();
    
    let firstNameValidity = isFirstNameValid(firstName);
    let lastNameValidity = isLastNamevalid(lastName);
    let emailvalidity = isEmailValid(email);
    let phoneNovalidity = isPhoneNoValid(phoneNo);
    let dobvalidity = isDobvalid(dob);
    let genderValidity = isGendervalid(gender);
    let addressValidity = isAddressValid(address);
    let stateValidity = isStateValid(state);
    let programValidity = isprogramvalid(program);
    let deptValidity = isDeptValid(dept);
    let etNoValidity  =  isEtNoValid(etNo);
    let totalMarksValidity = isTotalMarksValid(totalMarks);
    
    //validate all of them
    if(firstNameValidity && lastNameValidity && emailvalidity && phoneNovalidity && dobvalidity && genderValidity && addressValidity && stateValidity && programValidity && deptValidity && etNoValidity && totalMarksValidity)
    {
		return true;
	}
	else
	{
		return false;
	}  
}