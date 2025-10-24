const fs = require("fs")

function getTodosFovoritos() {
  return JSON.parse( fs.readFileSync("favoritos.json") )
}

function deleteFavorito(id) {
  const livros = JSON.parse( fs.readFileSync("favoritos.json") )

  const livrosFiltrados = livros.filter( livro => livro.id !== id)
  fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
  const livros = JSON.parse( fs.readFileSync("livros.json") )
  const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )

  const livroInserido = livros.find( livro => livro.id === id)
  const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
  fs.writeFileSync("favoritos.json", JSON.stringify(lnovaListaDeLivrosFavoritos))
}

module.exports = {
  getTodosFavoritos,
  deleteFavoritoPorId,
  insereFavorito
}