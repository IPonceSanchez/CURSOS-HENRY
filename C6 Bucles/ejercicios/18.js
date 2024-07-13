function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto  =1 
  for(let i=a; i<=b; i++){
    producto *=i;
  }return producto;
};
console.log(productoEntreNúmeros(1,5))
console.log(productoEntreNúmeros(0,5))
console.log(productoEntreNúmeros(4,5))
console.log(productoEntreNúmeros(7,15))
console.log(productoEntreNúmeros(7,7))


module.exports = productoEntreNúmeros;