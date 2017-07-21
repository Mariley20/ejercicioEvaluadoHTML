var asientos = []; // declaro array 

 function Pasajero(nombre, apellido, dni, nro_asiento){
 	this.nombre = nombre,
 	this.apellido = apellido,
 	this.dni = dni,
 	this.nro_asiento = nro_asiento
 };
   
function crearAsientos(asientos){ //creo mis asientos
	var cantidadAsiento = 32;
	var filas = 4;
	var columnas = cantidadAsiento / filas;
	var pasillo="";
		
	var asientosHTML = "<table border='2'>";

	for(var i = 1; i <= 4; i++ ){

		asientosHTML += "<tr>";
		//var color = "";
		var numeroDeAsiento = i;

		for(var j = 0 ; j < columnas; j++){

			//(asientos[numeroDeAsiento - 1] != undefined)? color = "bgcolor='#F70D0D'": color = "bgcolor='#2F5CED'";
			asientosHTML += "<td>"+ ( numeroDeAsiento ) +"</td>";
			numeroDeAsiento += 4;
		}

		(i == 2 )? pasillo += "<br><td></td></br>":pasillo = "";
		asientosHTML += "</tr>"+pasillo;
	}
	asientosHTML += "</table>";
	document.getElementById('dibujarAsientos').innerHTML = asientosHTML;
	//return asientosHTML;
}


crearAsientos();
var colorCelda;
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}

function redirect(event){
	//alert(event.target.textContent);
	//document.getElementById("mostrarNumeroAsiento").innerHTML=(event.target.textContent);

	var asiento = event.target.textContent;
	colorCelda = event.target;
	//console.log(asiento);
	var formReserva = "";
	formReserva += "<h2>Reserva de Asiento </h2>"+
					"<p><label >N° Asiento: </label><br>"+
					"<input type='text' id='nro_asiento' value='"+asiento+"' disabled ></p>"+
					"<p><label>Nombre: </label><br>"+
					"<input type='text' id='nombre' required></p>"+
					"<p><label>Apellidos: </label><br>"+
					"<input type='text' id='apellido' required></p>"+
					"<p><label>N° DNI: </label><br>"+
					"<input type='text' id='dni' required></p>";
					
	var button = "<button onclick='reservarAsiento()'>Guardar Reserva</button>"
	formReserva += button;
	if(colorCelda.style.backgroundColor == "red"){
		//alert(asiento);
		for(var i = 0; i < asientos.length; i++){
			if(asientos[i].nro_asiento == asiento){
				nro_asiento.value = asiento;
				nombre.innerHTML = asientos[i].nombre;
				document.getElementById('apellido').value = asientos[i].apellido;
				dni.value = asientos[i].dni;
			}
		}
		console.log(nombre.value+"-"+apellido.value+"-"+dni.value+"-"+nro_asiento.value)
	}
	
	document.getElementById("mostrarFormReserva").innerHTML = formReserva;



}

function reservarAsiento(){

	var nro_asiento = document.getElementById("nro_asiento").value;
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var dni = document.getElementById('dni').value;

	var pasajeros  = new Pasajero(nombre, apellido, dni, nro_asiento);
	asientos.push(pasajeros);
	colorCelda.style.backgroundColor ="red"
	console.log(asientos)
}

function mostrarLista(){
	var listaPasajeros = "<table>";
	listaPasajeros += "<tr><td colspan='2'>   Apellidos y Nombres   </td>"+
						"<td>  N° DNI  </td><td>N° de Asiento</td></tr>";
	for(var i = 0; i < asientos.length; i++){
		listaPasajeros += "<tr><td>"+asientos[i].apellido+"</td><td>"+asientos[i].nombre+"</td>"+
						"<td>"+asientos[i].dni+"</td><td>"+asientos[i].nro_asiento+"</td></tr>";
	}
	listaPasajeros += "</table>";
document.getElementById('listaPasajeros').innerHTML = listaPasajeros;
}

function buscarPasajero(){
	dniBuscar = document.getElementById('buscaDNI').value;
	//console.log(dniBuscar + "-"+asientos[0].dni)
	var buscarPasajeros = "<table>";
	buscarPasajeros += "<tr><td colspan='2'>   Apellidos y Nombres   </td>"+
						"<td>  N° DNI  </td><td>N° de Asiento</td></tr>";
	for(var i = 0; i < asientos.length; i++){
		if(asientos[i].dni == dniBuscar)
			buscarPasajeros += "<tr><td>"+asientos[i].apellido+"</td><td>"+asientos[i].nombre+"</td>"+
							"<td>"+asientos[i].dni+"</td><td>"+asientos[i].nro_asiento+"</td></tr>";	
	}
	buscarPasajeros += "</table>";
document.getElementById('listaPasajeros').innerHTML = buscarPasajeros;	
}
