const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
	cargarDB();

	let porHacer = {
		descripcion:descripcion,
		completado:false
	};

	listadoPorHacer.push(porHacer);

	guardarDB();

	return porHacer;
}

const cargarDB = () => {
	try{
		listadoPorHacer = require('../db/data.json');
	}catch(err){
		listadoPorHacer = [];
	}
	console.log(listadoPorHacer);
}

const actualizar = (descripcion, completado = true) => {
	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	} );
	if( index >= 0 ){
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}else{
		return false;
	}
}

const getListado = () => {
	cargarDB();
	return listadoPorHacer;
}

const eliminar = ( descripcion ) => {
	cargarDB();
	let index = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );


	if(index.length === listadoPorHacer.length){
		return false;
	}else{
		listadoPorHacer = index;
		guardarDB();
		return true;
	}	
}

const guardarDB = () => {
	let data = JSON.stringify( listadoPorHacer );

	fs.writeFile('db/data.json',data,( err )=>{
		console.log( err );
	});
}

module.exports = { crear, guardarDB, getListado, actualizar, eliminar }
