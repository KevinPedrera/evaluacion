
const estudiantes = [
    { nombre: "Juan Pérez", materia: "Matemáticas", promedio: 8.5 },
    { nombre: "Ana García", materia: "Historia", promedio: 9.0 },
    { nombre: "Luis Torres", materia: "Física", promedio: 7.8 },
    { nombre: "María Ruiz", materia: "Química", promedio: 8.9 }
];

// creaacion de efuncon
const calcularPromedio = (estudiantes) => {
    let suma = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        suma += estudiantes[i].promedio;
    }

    return suma / estudiantes.length;
};

// Llamada a la función y mostrar resultado
const resultado = calcularPromedio(estudiantes);
console.log("Promedio general del grupo:", resultado.toFixed(2));