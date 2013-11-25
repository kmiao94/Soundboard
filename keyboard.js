window.addEventListener("keypress", doKeyDown, true);

function doKeyDown(e){
	if (e.keyCode == 87){
		stfu.playclip();
	}
}