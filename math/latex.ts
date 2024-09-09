export const p3x1M = (M: number[]) => {
  const Mx = M.map((a) => a.toFixed(2))
  return `
          \\begin{bmatrix} 
            ${Mx[0]} \\\\ 
            ${Mx[1]} \\\\ 
            ${Mx[2]}
          \\end{bmatrix}
        `
}

export const p3x3M = (M: number[][]) => {
  const Mx = M.map((a) => a.map((b) => b.toFixed(2)))
  return `
          \\begin{bmatrix} 
            ${Mx[0][0]} & ${Mx[0][1]} & ${Mx[0][2]} \\\\ 
            ${Mx[1][0]} & ${Mx[1][1]} & ${Mx[1][2]} \\\\ 
            ${Mx[2][0]} & ${Mx[2][1]} & ${Mx[2][2]}
          \\end{bmatrix}
        `
}