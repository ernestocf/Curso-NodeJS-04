const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
let colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('===Tareas==='.blue);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            if (tarea.completado === true) {
                console.log('Estado', `${tarea.completado}`.green);
            } else {
                console.log('Estado', `${tarea.completado}`.red);
            }
            console.log('============'.blue);
        }
        break;
    case 'actualizar':
        if (porHacer.actualizar(argv.descripcion, argv.completado)) {
            console.log(`Actualizada la tarea: '${ argv.descripcion }'`);
        } else {
            console.log(`La tarea '${ argv.descripcion }', no existe.`);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no definido');
}