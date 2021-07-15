// process.argv will print out any command line arguments.

// process.argv nos regresará un arreglo
// la posición 0 es en dónde está instalado nodejs
// la posición 1 es en dónde está el archivo que se está ejecutando

// node .\arguments.js 1999 "Esto es una prueba" "Agosto" 2021
console.log(process.argv); // Regresa todo
console.log(process.argv[3]); // "Esto es una prueba"
console.log(process.argv[5]);