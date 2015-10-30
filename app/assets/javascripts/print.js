function printDiv(div) {
	var element = document.getElementById(div);
	var domClone = element.cloneNode(true);
	var $printSection = document.createElement("div");
	$printSection.id = "printSection";
	$printSection.appendChild(domClone);
	document.body.insertBefore($printSection, document.body.firstChild);
	window.print();

	var oldElement = document.getElementById('printSection');
	if (oldElement != null) { oldElement.parentNode.removeChild(oldElement);}

	return true;
}