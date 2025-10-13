const { getTodosLivros, getLivroPorId } = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros); // vai ser pego do arquivo .jason
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id
    const livro = getLivroPorId(id)
    res.send(livro); // vai ser pego do arquivo .jason
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro
}