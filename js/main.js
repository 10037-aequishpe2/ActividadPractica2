$('.carousel').carousel({
	interval: 1500,
	pause: "hover"
})

document.querySelector('#botonAjax').addEventListener('click', traerDatos);

function traerDatos() {
	console.log('ok');
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'archivo.txt', true);

	xhttp.send();

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);
			document.querySelector('#respuestaAjax').innerHTML = this.responseText;
		}
	}
}