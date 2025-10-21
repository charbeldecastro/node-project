const express = require("express");
const rotaLivros = require("./rotas/livro")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivros)

const port = 8000;

//rotas

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
});
