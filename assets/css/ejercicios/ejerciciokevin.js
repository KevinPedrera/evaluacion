let estudiantes = [];

const ingresarEstudiantes = () => {
    let numEstudiantes = parseInt(prompt("Cuantos estudiantes deseas ingresar?"));

    for (let i = 0; i < numEstudiantes; i++) {
        let nombre = prompt(`Ingresa el nombre del estudiante ${i + 1}:`);
        let promedio;
        do {
            promedio = parseFloat(prompt(`Ingresa el promedio de ${nombre}:`));
            if (isNaN(promedio) || promedio < 0 || promedio > 10) {
                alert("Por favor, ingresa un promedio valido (entre 0 y 10).");
            }
        } while (isNaN(promedio) || promedio < 0 || promedio > 10);
        
        estudiantes.push({ nombre, promedio });
    }
};

const calcularPromedioGeneral = () => {
    if (estudiantes.length === 0) {
        return 0;
    }
    let sumaPromedios = 0;
    for (const { promedio } of estudiantes) {
        sumaPromedios += promedio;
    }
    return sumaPromedios / estudiantes.length;
};

const encontrarMejorEstudiante = () => {
    if (estudiantes.length === 0) {
        return null;
    }
    let mejorEstudiante = estudiantes[0];
    for (const estudiante of estudiantes) {
        if (estudiante.promedio > mejorEstudiante.promedio) {
            mejorEstudiante = estudiante;
        }
    }
    return mejorEstudiante;
};

const ordenarEstudiantesPorPromedio = () => {
    return [...estudiantes].sort((a, b) => b.promedio - a.promedio);
};

const sistemaAcademico = () => {
    ingresarEstudiantes();

    if (estudiantes.length > 0) {
        let promedioGeneral = calcularPromedioGeneral();
        let mejorEstudiante = encontrarMejorEstudiante();
        let listaOrdenada = ordenarEstudiantesPorPromedio();

        mensaje += `Promedio General del curso: ${promedioGeneral.toFixed(2)}\n`;
        
        const { nombre: nombreMejor, promedio: promedioMejor } = mejorEstudiante;
        mensaje += `Estudiante con el mejor promedio: ${nombreMejor} (Promedio: ${promedioMejor})\n\n`;
        
        mensaje += "Lista de estudiantes (ordenada por promedio descendente):\n";

        for (const { nombre, promedio } of listaOrdenada) {
            mensaje += `- ${nombre} (Promedio: ${promedio})\n`;
        }

        alert(mensaje);
    } else {
        alert("No se ingresaron estudiantes.");
    }
};

sistemaAcademico();