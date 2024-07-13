function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let i=0
  do{
    num+=5;
    i++;
  } while( i<8);
  return num;
};
console.log(doWhile(0))
console.log(doWhile(1))
console.log(doWhile(9))
console.log(doWhile(-4))


module.exports = doWhile;