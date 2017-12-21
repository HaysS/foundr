const url = "http://localhost:8000/api/"

export function createAccount(email, password) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url+"users", true);

	const data = JSON.stringify({"email": email, "password": password});

	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	        var json = JSON.parse(xhr.responseText);
	        console.log(json.email + ", " + json.password);
	    }
	};

	xhr.send(data);
}