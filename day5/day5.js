export function printTriangle(size, character) {
  // Tu código aquí 🤟🏻🔥
  const arrTriangle = [];

  for (let i = 0; i < size; i++) {
    let espacio = " ".repeat(size - i);
    arrTriangle.push(size);
    arrTriangle[i] = character;

    console.log(`${espacio}` + arrTriangle.join(""));
  }
}

