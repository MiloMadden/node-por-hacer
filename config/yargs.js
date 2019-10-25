const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Crea una nueva tarea'
};
const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
                .command('crear', 'Crea una nueva tarea', {
                    descripcion
                })
                .command('actualizar', 'Actualiza una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borra una tarea', {
                    descripcion
                })
                .help()
                .argv;
module.exports = {
    argv
}