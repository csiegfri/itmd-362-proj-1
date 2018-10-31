Thanks=function(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
    
	result = "Congratulations, " + name + ", you're in. Expect an email at " + email + " in the near future.";
	
	document.getElementById("demo").innerHTML = result;
}

document.getElementById("submit").addEventListener("click", Thanks());