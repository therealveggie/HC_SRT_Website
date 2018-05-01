function drop2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it; also modified for if anyone clicks outside of modal window
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}

window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
	  var myDropdown = document.getElementById("myDropdown2");
		if (myDropdown.classList.contains('show')) {
			console.log('aeaeee'); 
		  myDropdown.classList.remove('show');
		}
	}
}