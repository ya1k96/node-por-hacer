const opt = {
	descripcion:{
					demand:true,
					alias:'d'					
				}
}
const argv = require('yargs')
				.command('listar','listar tareas',{
					opt,
					completado:{
						default:false,
						alias:'c'
					}
				})
				.command('crear','crear una lista de quehacer',{
					opt
				})
				.command('actualizar','actualiza el status',{
					opt,
					completado:{
						alias:'c',
						demand:false
					}

				})
				.command('eliminar','Elimminar una tarea', opt)
				.help()
				.argv;
module.exports = { argv };