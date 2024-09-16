/**
 * Obtener el vector de la matriz inicial de Leslie del atributo 
 * de la tabla "specie" de la base de datos
 * @param aM animal Matrix (aM)
 * @returns la matriz de Leslie (L)
 */
export const LeslieMatrix = (aM: number[][]): number[][] => {
  return [
    [0, aM[1][0], aM[2][0]],
    [aM[0][1], 0, 0],
    [0, aM[1][1], 0],
  ]
}

/**
 * Función para calcular (Leslie Matrix L) ^ (t años))
 * @param L Matriz de Leslie
 * @param t tiempo en años
 * @returns La matriz potencia de Leslie (LMP)
 */
export const LMPotential = (L: number[][], t: number): number[][] => {
  // Función para multiplicar matrices 3x3
  const multiply = (A: number[][], B: number[][]) => {
    // Matriz nula 3x3 para actualizar el resultado
    let C = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    // Actualizar la multiplicación de cada elemento de las dos matrices
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          C[i][j] += A[i][k] * B[k][j]
        }
      }
    }
    // Copiar el resultado nuevamente en la matriz A
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        A[i][j] = C[i][j]
      }
    }
  }
  // Inicializar el resultado con la matriz identidad ans (acumulador)
  let ans = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]
  // Potenciación rápida
  while (t > 0) {
    if (t & 1) multiply(ans, L)
    multiply(L, L)
    t >>= 1
  }
  return ans
}

/**
 * Obtener el vector de la matriz de la población inicial
 * @param aM animal Matrix (aM)
 * @returns la matriz 1x3 de la población inicial (No)
 */
export const initPopulation = (aM: number[][]): number[] => {
  return [aM[0][2], aM[1][2], aM[2][2]]
}

/**
 * Obtener el vector de la matriz de la población final
 * @param aM animal Matrix (aM)
 * @param t tiempo en años
 * @returns la matriz 1x3 de la población final luego de t años.
 */
export const finalPopulation = (aM: number[][], t: number): number[] => {
  // Obtener valores
  const L = LeslieMatrix(aM) // L
  const LMP = LMPotential(L, t) // L^t
  const No = initPopulation(aM) // N(0)
  // Formula final = (L^t)(N(0))
  return [
    LMP[0][0] * No[0] + LMP[0][1] * No[1] + LMP[0][2] * No[2],
    LMP[1][0] * No[0] + LMP[1][1] * No[1] + LMP[1][2] * No[2],
    LMP[2][0] * No[0] + LMP[2][1] * No[1] + LMP[2][2] * No[2],
  ]
}
