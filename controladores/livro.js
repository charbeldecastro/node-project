const { getTodosLivros } = require("../servicos/livros");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros); // vai ser pego do arquivo .jason
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros
}