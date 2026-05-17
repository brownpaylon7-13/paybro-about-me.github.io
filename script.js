var i = 0;
function arithmeticCalc() {
	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);

	let operator;
	let radios = document.getElementsByName('operator');
	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			operator = radios[i].value;
			break;
		}
	}
	let result;

	switch(operator) {
		case "add":
			result = num1 + num2;
			break;
		case "subtract":
			result = num1 - num2;
			break;
		case "multiply":
			result = num1 * num2;
			break;
		case "divide":
			if (num2 == 0) {
				result = "Error: Division by zero";
			}
			else {
				result = num1 / num2;
			}
			break;
		default:
			result = "Select an operator"
	}

	alert("Result: " + result);
}

function factorialCalc() {
	let num = parseFloat(document.getElementById('num').value);

	let result = 1;

	if (num == 0) {
		result = 1;
		document.getElementById('factorialResult').innerHTML = result;
	}

	else if (num < 0) {
		document.getElementById('factorialResult').innerHTML = "Error: Negative number";
	}
	
	else {
		for (let i = 1; i <= num; i++) {
			result = result * i;
		}
		document.getElementById('factorialResult').innerHTML = result;
	}

}

function nthFibonacciCalc() {
	let fib = [];
	let num = parseFloat(document.getElementById('n').value);
	for (let i = 0; i < num; i++) {
        	if (i === 0) fib.push(0);
        	else if (i === 1) fib.push(1);
        	else fib.push(fib[i-1] + fib[i-2]);
    	}
    
    alert("Result: " + fib[num-1]);
}

function rangeCalc() {
	let num1 = parseFloat(document.getElementById('num3').value);
	let num2 = parseFloat(document.getElementById('num4').value);
	let num3 = parseFloat(document.getElementById('num5').value);

	let max = Math.max(num1, num2, num3);
	let min = Math.min(num1, num2, num3);
	let range = max - min;

	alert("Maximum number: " + max + "\nMinimum number: " + min + "\nRange: " + range);
}

function submitMailing() {
	i++;
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var zip = document.getElementById('zip').value;

	if (firstName === "" || lastName === "" || email === "" || zip === "") {
		alert("Please fill in all fields before submitting.");
		return;
	}

	var listed = firstName + ' ' + lastName + ' - ' + email + ' - ' + zip + '<br>';

	document.getElementById("signUpDisplay").innerHTML += listed;

	resetMailing();
}

function resetMailing() {
	document.getElementById('firstName').value = "";
	document.getElementById('lastName').value = "";
	document.getElementById('email').value = "";
	document.getElementById('zip').value = "";
}