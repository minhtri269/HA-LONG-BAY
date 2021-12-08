function answercustomer() {
	var tour=document.getElementById("mydiv").value;
	var name=document.getElementById("mydiv1").value;
	var phone=document.getElementById("mydiv2").value;
	var number=document.getElementById("mydiv3").value;

	if(tour==""){
		alert("The Tour is required");
	}
	if(name=="" ){
		alert("The Name is required");
	}
	if(phone=="" ){
		alert("The Phone is required ");
	}
	if(number==""){
		alert("The Number of Travelers is required");
	}
	else{
		alert("Welcome to book a tour");
	}
}