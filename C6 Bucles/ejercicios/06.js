function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num>99 && num<1000|| num<-99 && num>-1000){
    return true;
  }else return false;
};

console.log(tieneTresDigitos(7))
console.log(tieneTresDigitos(-977))
console.log(tieneTresDigitos(1234))
console.log(tieneTresDigitos(345))


module.exports = tieneTresDigitos;
