function firstChar(text) {
  // your code here
	if(!text.trim().length) return '';
	return text[0];
	
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
