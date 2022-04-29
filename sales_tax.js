function  calculate_Function() {
	// get user entries
	var x = document.getElementById('stotal').value;
	var y = document.getElementById('trate').value;

	//Parse to float
	var salesTotal = parseFloat(x);
	var taxRate = parseFloat(y);

	// calculate and display results
	var salesTax = (salesTotal * taxRate)/100;
	var total = salesTotal + salesTax;
		
	// display results
	document.getElementById('stax').value = salesTax;
	document.getElementById('total').value = total;

	// move focus

	if (document.getElementById('calculate').onclick) {
		document.getElementById('stotal').focus();
	}


};

function focusOnLoad() {
	document.getElementById('stotal').focus();
  }

function clear_Entries_Function() {
	// clear all text boxes
	if (document.getElementById('clear').onclick) {
		document.getElementById('stotal').value="";
		document.getElementById('trate').value="";
		document.getElementById('stax').value="";
		document.getElementById('total').value="";
	}

	// move focus
	if (document.getElementById('clear').onclick) {
		document.getElementById('stotal').focus();
	}
};
