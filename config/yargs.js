const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    alias: 'c',
    default: true
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completo de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina elemento por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}