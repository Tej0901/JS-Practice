var selectedDataRow = null

function onFormSubmit() 
{
    if (validate()) {
        var formData = readFormData();
        if (selectedDataRow == null)
        {
            let id = Math.floor(Math.random() *100000);
            insertNewRecord(formData,id);
        }
        else{
            updateRecord(formData);
        }
        resetForm();
    }
    else{
        alert("Incorrect Entries!!!");
    }
}