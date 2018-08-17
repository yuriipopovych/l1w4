
var getStrongEl = document.getElementsByTagName('strong');
function changeColor() {
	for (i = 0; i < getStrongEl.length; i++) {
		getStrongEl[i].classList.add('changeColor')
	}
}
function startingColor() {
	for (i = 0; i < getStrongEl.length; i++) {
		getStrongEl[i].classList.remove('changeColor')
	}
}
