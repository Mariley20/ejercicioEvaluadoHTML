var asientos = []; // declaro array 
var colorCelda; //color de celda

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
	for(var i = 1; i <= 4; i++ )
	{
		asientosHTML += "<tr>";
		var numeroDeAsiento = i;
		for(var j = 0 ; j < columnas; j++)
		{
			asientosHTML += "<td>"+ ( numeroDeAsiento ) +"</td>";
			numeroDeAsiento += 4;
		}
		(i == 2 )? pasillo += "<td></td>":pasillo = "";
		asientosHTML += "</tr>"+pasillo;
	}
	asientosHTML += "</table>";
	document.getElementById('dibujarAsientos').innerHTML = asientosHTML;
}

crearAsientos();

var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
	celdas[i].addEventListener('click',redirect,false);
}

function redirect(event){
	var asiento = event.target.textContent;
	colorCelda = event.target;

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

	var button = "<button  onclick='reservarAsiento()'>Guardar</button>"+
		"<button  onclick='cancelarAsiento()'>Cancelar Reserva</button>";
	formReserva += button;
	document.getElementById("mostrarFormReserva").innerHTML = formReserva;

	if(colorCelda.style.backgroundColor == "red")
	{
		var indice = 0;
		for(var i = 0; i < asientos.length; i++)
		{
			if(asientos[i].nro_asiento == asiento){
				indice = i;}
			document.getElementById('nombre').value = asientos[indice].nombre;
			document.getElementById('apellido').value = asientos[indice].apellido;
			document.getElementById('dni').value = asientos[indice].dni;
		}
	}
}

function reservarAsiento(){

	var nro_asiento = document.getElementById("nro_asiento").value;
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var dni = document.getElementById('dni').value;
	if(nro_asiento != "" && nombre != "" && apellido != "" && dni != ""){

		var pasajeros  = new Pasajero(nombre, apellido, dni, nro_asiento);
		asientos.push(pasajeros);
		colorCelda.style.backgroundColor ="red";
		alert("guadado con Exito");
	}else{
		alert("ingrese datos");
	}
	console.log(asientos)
}

function cancelarAsiento(){
	
	var nro_asiento = document.getElementById("nro_asiento").value;

	for(var i = 0; i < asientos.length; i++)
	{
		if(nro_asiento == asientos[i].nro_asiento ){
			asientos.splice(i, 1);
			//console.log(asientos[i].nro_asiento+"."+nro_asiento)
		}
		console.log(asientos);
	}
	
	colorCelda.style.backgroundColor ="white";
	alert("se elimino reserva")
	limpiar();
	//console.log(asientos)
}
function mostrarLista(){
	var listaPasajeros = "<table>";
	listaPasajeros += "<tr><td>N°</td><td> Asiento N°</td><td colspan='2'>   Apellidos y Nombres   </td>"+
		"<td>  N° DNI  </td></tr>";
		if (asientos.length != 0) {
			for(var i = 0; i < asientos.length; i++)
			{
				listaPasajeros += "<tr><td>"+(i + 1)+"</td><td>"+asientos[i].nro_asiento+"</td>"+
					"<td>"+asientos[i].nombre+"</td><td>"+asientos[i].dni+"</td>"+
					"<td>"+asientos[i].apellido+"</td></tr>";
			}
		}else{
			listaPasajeros += "<h2>No hay pasajeros</h2>"
		}
	
	listaPasajeros += "</table>";
	document.getElementById('listaPasajeros').innerHTML = listaPasajeros;
}

function buscarPasajero(){
	dniBuscar = document.getElementById('buscaDNI').value;
	var buscarPasajeros = "<table>"+
		"<tr><td colspan='2'><strong>   Apellidos y Nombres </strong>   </td>"+
		"<td> <strong>  N° DNI </strong>  </td><td><strong> N° de Asiento </strong> </td></tr>";
	for(var i = 0; i < asientos.length; i++)
	{
		if(asientos[i].dni == dniBuscar)
			buscarPasajeros += "<tr><td>"+asientos[i].apellido+"</td><td>"+asientos[i].nombre+"</td>"+
				"<td>"+asientos[i].dni+"</td><td>"+asientos[i].nro_asiento+"</td></tr>";	
	}
	buscarPasajeros += "</table>";
	document.getElementById('listaPasajeros').innerHTML = buscarPasajeros;	
}

function limpiar(){

	if(colorCelda.style.backgroundColor == "red" ){
		nombre.disabled = "true";
		dni.disabled = "true";
		apellido.disabled = "true";
		alert("Este asieto esta reservado \n Seleccione otro Asiento \n O Elimine Reserva")
	}else{
		nombre.value = "";
		dni.value = "";
		apellido.value = "";
	}
	document.getElementById('listaPasajeros').innerHTML = "";
}