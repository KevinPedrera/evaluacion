const ingresarEstudiantes = (n) => {
    const estudiantes = [];

    for (let i = 0; i < n; i++) {
        const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
        const promedio = parseFloat(prompt(`Ingrese el promedio de ${nombre}:`));
        estudiantes.push({ nombre, promedio });
    }

    return estudiantes;
};

const calcularPromedioGeneral = (estudiantes) =>
    estudiantes.reduce((suma, e) => suma + e.promedio, 0) / estudiantes.length;

const obtenerMejorEstudiante = (estudiantes) =>
    estudiantes.reduce((mejor, actual) =>
        actual.promedio > mejor.promedio ? actual : mejor
    );

const ordenarPorPromedioDesc = (estudiantes) =>
    [...estudiantes].sort((a, b) => b.promedio - a.promedio);

const mostrarResultados = (estudiantes) => {
    const promedioGeneral = calcularPromedioGeneral(estudiantes);
    const mejorEstudiante = obtenerMejorEstudiante(estudiantes);
    const listaOrdenada = ordenarPorPromedioDesc(estudiantes);

    console.log("Promedio general:", promedioGeneral.toFixed(2));
    console.log("Mejor estudiante:", mejorEstudiante.nombre, "-", mejorEstudiante.promedio);
    listaOrdenada.forEach((e, i) =>
        console.log(`${i + 1}. ${e.nombre} - ${e.promedio}`)
    );
};

const n = parseInt(prompt("¿Cuántos estudiantes desea ingresar?"));
const estudiantes = ingresarEstudiantes(n);
mostrarResultados(estudiantes);
