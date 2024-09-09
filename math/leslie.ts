// Get the initial Leslie Matrix vector from animal matrix (aM)
export const LeslieMatrix = (aM: number[][]): number[][] => {
  return [[0, aM[1][0], aM[2][0]], [aM[0][1], 0, 0], [0, aM[1][1], 0]]
}

// Function to calculate (Leslie Matrix L) ^ (t years))
export const LMPotential = (L: number[][], t: number): number[][] => {
  // Function to multiply two 3x3 matrices
  const multiply = (A: number[][], B: number[][]) => {
    // Matrix to store the result
    let C = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
    // Update each element from the two matrices
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          C[i][j] += A[i][k] * B[k][j]
        }
      }
    }
    // Copy the result back to the first matrix A
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        A[i][j] = C[i][j]
      }
    }
  }
  // Initialize result with identity matrix ans (accumulator)
  let ans = [[1, 0, 0],[0, 1, 0],[0, 0, 1]]
  // Fast Exponentiation
  while (t > 0) {
    if (t & 1) multiply(ans, L)
    multiply(L, L)
    t >>= 1
  }
  return ans
}

// Get the initial population vector from animal matrix (aM)
export const initPopulation = (aM: number[][]): number[] => {
  return [aM[0][2], aM[1][2], aM[2][2]];
}

// Get the final population in t (years) from animal matrix (aM)
export const finalPopulation = (aM: number[][], t: number): number[] => {
  // Get values
  const L = LeslieMatrix(aM) // L
  const LMP = LMPotential(L, t) // L^t
  const No = initPopulation(aM) // N(0)
  // Final formula = (L^t)(N(0))
  return [
    (LMP[0][0] * No[0]) + (LMP[0][1] * No[1]) + (LMP[0][2] * No[2]),
    (LMP[1][0] * No[0]) + (LMP[1][1] * No[1]) + (LMP[1][2] * No[2]),
    (LMP[2][0] * No[0]) + (LMP[2][1] * No[1]) + (LMP[2][2] * No[2]),
  ]
}