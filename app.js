const { argv } = require('./config/yargs');

const color = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer') ;

let comando = argv._[0];

switch(comando){
	case 'crear':
		porHacer.crear(argv.descripcion);		
	break;

	case 'listar':
		let tareas = porHacer.getListado().filter( data => {
			return data.completado === argv.completado;
		});
		console.log(color.green('==============================='));
		for (let listado of tareas ) {			
			console.log(color.white(listado.descripcion));
			console.log(color.white(`Estado: ${ listado.completado }`));			
			console.log(color.green('==============================='));
		}
	break;

	case'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
	break;

	case 'eliminar':
		let eliminado = porHacer.eliminar(argv.descripcion);
	break;
}