function getFormvalue() {
    //Write your code here
	var form =document.getElementById("form1");
	let fName=form.elements['fname'].value;
	let lName=form.elements['lname'].value;
	alert("fname"+fName+"lname"+lName);
	

}
