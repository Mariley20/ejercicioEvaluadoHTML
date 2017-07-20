reservas = document.getElementById('reserva');
reservas.onclick = function(){
   for (var i = 0; i < 32; i++) {
      asientos[i] = undefined;
   }
};

var asientos = [{
	nombre : "Maria",
	apellido : "Cervantes",
	dni : 77693456,
	asiento : 3
},
	{
		nombre : "Carlos",
		apellido : "Fernadez",
		dni : 99999999,
		asiento : 29
	},
	{
		nombre : "Katerine",
		apellido : "Mendez",
		dni : 12312312,
		asiento : 30
	}
	];
   
function crearAsientos(){

	var numeroAsiento = 32;
	var filas = 4;
	var columnas = numeroAsiento / filas;
	var pasillo="";
		
	var asientosHTML = "<table border='2'>";

	for(var i = 1; i <= 4; i++ ){

		asientosHTML += "<tr>";
		var color = "";

		var contar = i;

		for(var j = 0 ; j < columnas; j++){
			(asientos[contar - 1] != undefined)? color = "bgcolor='#F70D0D'": color = "bgcolor='#2F5CED'";
			asientosHTML += "<td "+ color +">"+ ( contar ) +"</td>";
			contar += 4;
		}

		(i == 2 )? pasillo += "<br><td></td></br>":pasillo = "";

		asientosHTML += "</tr>"+pasillo;
	}
	asientosHTML += "</table>";

	document.getElementById('dibujarAsientos').innerHTML = asientosHTML;
	//return asientosHTML;
}

crearAsientos();




var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}

function redirect(event){

	//alert(event.target.textContent);
	//document.getElementById("mostrarNumeroAsiento").innerHTML=(event.target.textContent);
	var asiento = event.target.textContent;
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
	document.getElementById("mostrarFormReserva").innerHTML = formReserva;
}

function reservarAsiento(){

	var nro_asiento = document.getElementById("nro_asiento").value;
	console.log(nro_asiento)
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var dni = document.getElementById('dni').value;
	//alert(nro_asiento +"-"+nombre+ "-" + apellido+"-"+dni)
	asientos[nro_asiento - 1] = {
		nombre : nombre,
		apellido : apellido,
		dni : dni,
		asiento : nro_asiento
	}
	//crearAsientos();
	console.log(asientos)
}

function mostrarLista(){
	var listaPasajeros = "<table>";
	listaPasajeros += "<tr><td colspan='2'>   Apellidos y Nombres   </td>"+
						"<td>  N° DNI  </td><td>N° de Asiento</td></tr>";
	for(var i = 0; i < asientos.length; i++){
		if(asientos[i] != undefined){
			listaPasajeros += "<tr><td>"+asientos[i].apellido+"</td><td>"+asientos[i].nombre+"</td>"+
								"<td>"+asientos[i].dni+"</td><td>"+asientos[i].asiento+"</td></tr>";
		}
		
		
	}
	listaPasajeros += "</table>";
document.getElementById('listaPasajeros').innerHTML = listaPasajeros;
}

function buscarPasajero(){
	dniBuscar = document.getElementById('buscaDNI').value;
var buscarPasajeros = "<table>";
	buscarPasajeros += "<tr><td colspan='2'>   Apellidos y Nombres   </td>"+
						"<td>  N° DNI  </td><td>N° de Asiento</td></tr>";
	for(var i = 0; i < asientos.length; i++){
		if(asientos[i] != undefined){
			if(asiento[i].dni == dniBuscar)
			buscarPasajeros += "<tr><td>"+asientos[i].apellido+"</td><td>"+asientos[i].nombre+"</td>"+
								"<td>"+asientos[i].dni+"</td><td>"+asientos[i].asiento+"</td></tr>";
		}
		
		
	}
	buscarPasajeros += "</table>";
document.getElementById('listaPasajeros').innerHTML = buscarPasajeros;	
}
