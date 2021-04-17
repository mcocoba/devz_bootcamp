function pascal(rowIndex) {
  let triangle = [];

  if (rowIndex === 0) {
    return [1];
  }

  // Recorrer renglones
  for (let r = 0; r < rowIndex + 1; r++) {
    let row = [];

    // Primer y Ultima columan seran siempre 1
    row[0] = 1;
    row[r] = 1;

    // Recorremos columnas, incializamos en 1 el pointer de las columnas
    for (let c = 1; c < r; c++) {
      // Usamos las columnas del row anterior para hacer la suma.
      row[c] = triangle[r - 1][c] + triangle[r - 1][c - 1];
    }
    triangle[r] = row;
  }

  return triangle[rowIndex];
}

console.log([1], pascal(0));
console.log([1, 3, 3, 1], pascal(3));
