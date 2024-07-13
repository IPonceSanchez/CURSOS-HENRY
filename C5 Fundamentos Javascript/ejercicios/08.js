function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  
  let resultado= (numero - Math.floor(numero));
  return resultado ==0;
  
};
console.log(esNumeroEntero(33.11))
console.log(esNumeroEntero(-93))
console.log(esNumeroEntero(3.2))

module.exports = esNumeroEntero;