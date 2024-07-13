function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  return (Math.max(x,y));

};

console.log(obtenerMayor(8,8))
console.log(obtenerMayor(-8,2))
console.log(obtenerMayor(56,80))
console.log(obtenerMayor(0,8))


module.exports = obtenerMayor;
