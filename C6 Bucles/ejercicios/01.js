function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código: PRUEBA PARA SABER SI GUARDA EN EL GIT HUB 
  if(a==b && a<0){
    return true;
  }else return false;
  
};
console.log(esIgualYNegativo(7,7))
console.log(esIgualYNegativo(7,2))
console.log(esIgualYNegativo(-7,-7))


module.exports = esIgualYNegativo;
