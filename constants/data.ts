export const mySpecie = {
  name: "Flamenco austral",
  scientific_name: "Phoenicopterus chilensis Molina, 1782",
  definitions: ["Chilean Flamingo", "Flamingo-chileno"],
  family: "Phoenicopteridae",
  order: "Phoenicopteriformes",
  class: "Aves",
  phylum: "Chordata",
  kingdom: "Animalia",
  images: [
    "https://i.postimg.cc/7h3YKpqT/flamenco-austral-1.jpg",
    "https://i.postimg.cc/sgDDJ6qv/flamenco-austral-2.jpg",
    "https://i.postimg.cc/3JZxm5Ls/flamenco-austral-3.jpg",
    "https://i.postimg.cc/65KQ85hV/flamenco-austral-4.jpg",
    "https://i.postimg.cc/MpPZ30Jt/flamenco-austral-5.jpg",
    "https://i.postimg.cc/3JZxm5Ls/flamenco-austral-3.jpg"
  ],
  information: [
    [0, 0.32, 69],
    [1.9, 0.48, 67],
    [2.1, 0, 31],
  ]
}

export const preservationState = [ 
  {
    id: 0,
    name: "No evaluado",
    acronym: "NE",
    description: "Aún no ha sido evaluado según los criterios para determinar su estado de conservación.",
    color: "linear-gradient(to top right, #a3a3a3, #737373)" // gris
  },
  {
    id: 1,
    name: "No aplicable",
    acronym: "NA",
    description: "Esta categoría no es aplicable a la especie o al grupo en cuestión.",
    color: "linear-gradient(to top right, #737373, #525252)" // gris oscuro
  },
  {
    id: 2,
    name: "Datos deficientes",
    acronym: "DD",
    description: "No se dispone de suficiente información para evaluar el riesgo de extinción de la especie.",
    color: "linear-gradient(to top right, #fef08a, #facc15)" // amarillo
  },
  {
    id: 3,
    name: "Menor preocupación",
    acronym: "LC",
    description: "Especies que no enfrentan un riesgo inmediato de extinción y tienen poblaciones estables.",
    color: "linear-gradient(to top right, #86efac, #22c55e)" // verde
  },
  {
    id: 4,
    name: "Casi amenazado",
    acronym: "NT",
    description: "Especies cercanas a cumplir con los criterios para ser consideradas en una categoría de riesgo mayor.",
    color: "linear-gradient(to top right, #fde047, #f59e0b)" // amarillo anaranjado
  },
  {
    id: 5,
    name: "Vulnerable",
    acronym: "VU",
    description: "Especies que enfrentan un riesgo alto de extinción en la naturaleza a medio plazo.",
    color: "linear-gradient(to top right, #fdba74, #fb923c)" // naranja
  },
  {
    id: 6,
    name: "En peligro",
    acronym: "EN",
    description: "Especies en riesgo de extinción muy alto en un futuro cercano si no se toman medidas de conservación.",
    color: "linear-gradient(to top right, #fca5a5, #ef4444)" // rojo claro
  },
  {
    id: 7,
    name: "En peligro crítico",
    acronym: "CE",
    description: "Especies en riesgo extremadamente alto de extinción en un futuro inmediato.",
    color: "linear-gradient(to top right, #ef4444, #b91c1c)" // rojo intenso
  },
  {
    id: 8,
    name: "Regionalmente extinto",
    acronym: "RE",
    description: "Especies que han desaparecido completamente en una región específica, pero pueden existir en otros lugares.",
    color: "linear-gradient(to top right, #c084fc, #a855f7)" // morado
  },
  {
    id: 9,
    name: "Extinto en la naturaleza",
    acronym: "EW",
    description: "Especies que solo sobreviven en cautiverio o en programas de conservación, pero no en su hábitat natural.",
    color: "linear-gradient(to top right, #93c5fd, #3b82f6)" // azul claro
  },
  {
    id: 10,
    name: "Extinto",
    acronym: "EX",
    description: "Especies que ya no existen en ninguna parte del mundo, habiendo desaparecido por completo.",
    color: "linear-gradient(to top right, #000000, #3f3f46)" // negro
  }
]