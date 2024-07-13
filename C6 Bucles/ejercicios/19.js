function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sumar = 0
  for(let i=0;i<=n;i++){
    sumar +=i;
  };return sumar;
};
console.log(sumarHastaN(4))
console.log(sumarHastaN(2))
console.log(sumarHastaN(9))
console.log(sumarHastaN(0))


module.exports = sumarHastaN;
