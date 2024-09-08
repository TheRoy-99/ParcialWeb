function sumarCuadros (arrayNumeros) {
  let total = 0

  arrayNumeros.forEach(numero => {
    const numString = numero.toString()
    const longitud = numString.length

    console.log('+ ' + '-'.repeat(longitud) + ' +')

    console.log('| ' + numString + ' |')

    total += numero
  })

  const totalString = total.toString()
  const longitudTotal = totalString.length

  console.log('+ ' + '-'.repeat(longitudTotal) + ' +')

  console.log('| ' + totalString + ' |')

  console.log('+ ' + '-'.repeat(longitudTotal) + ' +')
}
const arrayNumeros = [1, 23, 453, 3267, 12354, 123456]
sumarCuadros(arrayNumeros)
