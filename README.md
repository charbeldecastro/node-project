# Alura Books
Projeto de estudo de Node.js e Express feito em acompanhamento do curso Node.js: continue seu projeto full stack criando uma API com Express da Alura.

🔗 Documentações: 

- Instalação: [Express.js](https://expressjs.com/pt-br/)
- Instalação: [Nodemon](https://www.npmjs.com/package/nodemon)
- Banco de Dados: [Artigo](https://medium.com/sysadminas/banco-de-dados-af36571670ee)
-  Status de respostas HTTP: [Códigos](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status)
-  Testes de API: [Postman](https://medium.com/@thiagogrespi/testes-de-api-parte-1-entendendo-e-botando-a-m%C3%A3o-na-massa-com-postman-b365923b83e1)

## Iniciando o projeto Node no terminal
  <code style="color: #d63333ff ">npm init</code> é um comando do Node Package Manager (npm) que inicializa um novo projeto Node.js, criando o arquivo package.json de forma interativa.

  <code style="color: #d63333ff ">npm i express</code>
  é um comando que instala o framework Express.js no seu projeto Node.js.

  <code style="color: #d63333ff ">node app.js</code> é um comando que executa um arquivo JavaScript usando o Node.js. Neste caso, executa o arquivo app.js.

  <code style="color: #d63333ff ">npm i nodemon</code> é um comando que instala o Nodemon, uma ferramenta que reinicia automaticamente sua aplicação Node.js sempre que detecta mudanças nos arquivos.

  <code style="color: #d63333ff ">nodemon app.js</code> é um comando que executa o arquivo app.js com monitoramento automático, reiniciando o servidor sempre que você salvar alterações no código.

  No navegador, vamos acessar a seguinte URL: <code style="color: #33d646ff ">localhost:8000</code> ou <code style="color: #33d646ff ">localhost:8000/livros</code>.



  # O que são Ações HTTP? 🌐
 
HTTP (Hypertext Transfer Protocol) é como um "idioma" que navegadores e servidores usam para conversar. As **ações HTTP** (também chamadas de **métodos HTTP** ou **verbos HTTP**) são como comandos que dizem ao servidor o que você quer fazer.

## As Principais Ações

Pense nelas como verbos de um idioma:

### **GET** - "Me dê isso"
- Serve para **buscar/ler** informações
- Exemplo: quando você acessa um site, seu navegador faz um GET
- É como pedir um livro emprestado na biblioteca - você só quer ler, não vai modificar nada

### **POST** - "Crie algo novo"
- Serve para **criar/enviar** novos dados
- Exemplo: quando você preenche um formulário de cadastro e clica em "Enviar"
- É como entregar um documento novo para ser arquivado

### **PUT** - "Substitua isso completamente"
- Serve para **atualizar/substituir** algo que já existe
- Exemplo: quando você edita seu perfil completo em uma rede social
- É como reescrever uma página inteira de um caderno

### **PATCH** - "Modifique só uma parte"
- Serve para **atualizar parcialmente**
- Exemplo: quando você muda só sua foto de perfil
- É como usar corretivo e escrever por cima de uma palavra

### **DELETE** - "Apague isso"
- Serve para **remover** algo
- Exemplo: quando você exclui uma postagem
- É autoexplicativo! 🗑️

## Outras Ações Úteis

- **HEAD**: igual ao GET, mas só quer os cabeçalhos (metadados), sem o conteúdo
- **OPTIONS**: pergunta quais ações são permitidas
- **CONNECT**: estabelece um túnel (usado raramente)
- **TRACE**: faz um diagnóstico da rota da requisição

## Analogia do Restaurante 🍽️

Imagine um restaurante:

- **GET**: Ver o cardápio
- **POST**: Fazer um pedido novo
- **PUT**: Trocar seu pedido completamente ("Na verdade, quero pizza em vez de hambúrguer")
- **PATCH**: Ajustar seu pedido ("Adicione bacon no hambúrguer")
- **DELETE**: Cancelar seu pedido

## Na Prática

Quando você digita `www.exemplo.com` no navegador, acontece:

```js
GET /pagina-inicial HTTP/1.1
Host: www.exemplo.com
```

Quando você envia um formulário de contato:

```js
POST /enviar-mensagem HTTP/1.1
Host: www.exemplo.com
Content-Type: application/json

{"nome": "João", "mensagem": "Olá!"}
```

---

**Resumo rápido**: As ações HTTP são comandos que dizem ao servidor se você quer LER (GET), CRIAR (POST), ATUALIZAR (PUT/PATCH) ou DELETAR (DELETE) informações. São a base de como a internet funciona! 🚀

# Rota GET em APIs 🛣️

## O que é uma Rota?

Uma **rota** é como um endereço específico em uma API. É o caminho que você usa para acessar determinado recurso ou funcionalidade.

Pense assim: se a API fosse um prédio, as rotas seriam os números dos apartamentos.

## Rota GET - Buscando Informações

O método **GET** é usado para **recuperar/ler** dados. Ele **não modifica** nada no servidor, apenas busca informações.

### Estrutura Básica

```j
GET /caminho/do/recurso
```

## Exemplos Práticos 📱

### 1. **API de Usuários**

```
GET /usuarios
```
→ Retorna a lista de todos os usuários

```
GET /usuarios/123
```
→ Retorna apenas o usuário com ID 123

```
GET /usuarios/123/posts
```
→ Retorna todos os posts do usuário 123

### 2. **API de Produtos**

```
GET /produtos
```
→ Lista todos os produtos

```
GET /produtos/categoria/eletronicos
```
→ Lista produtos da categoria eletrônicos

```
GET /produtos?preco_max=100&ordenar=nome
```
→ Produtos até R$100, ordenados por nome

## Parâmetros em Rotas GET

### **1. Parâmetros de Caminho (Path Parameters)**

Fazem parte da URL:

```
GET /usuarios/42/pedidos/7
```
- `42` = ID do usuário
- `7` = ID do pedido

### **2. Parâmetros de Consulta (Query Parameters)**

Vêm depois do `?`:

```
GET /produtos?categoria=livros&pagina=2&limite=20
```
- `categoria=livros`
- `pagina=2`
- `limite=20`

## Exemplo Real com JSON Response

**Requisição:**
```
GET /usuarios/5
```

**Resposta (JSON):**
```json
{
  "id": 5,
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "idade": 28,
  "cidade": "São Paulo"
}
```

## Boas Práticas ✅

### ✅ **Faça:**
```
GET /usuarios          # Lista de usuários
GET /usuarios/10       # Usuário específico
GET /posts?autor=5     # Posts filtrados
```

### ❌ **Evite:**
```
GET /getUsuarios       # Redundante (GET já diz isso)
GET /usuario-deletar   # GET não deve modificar dados
```

## Características Importantes

| Característica | Descrição |
|---|---|
| **Seguro** | Não altera dados no servidor |
| **Idempotente** | Pode chamar várias vezes com mesmo resultado |
| **Cacheable** | Navegadores podem guardar a resposta |
| **Parâmetros** | Vão na URL (visíveis) |

## Códigos de Resposta Comuns

- **200 OK**: Sucesso! Aqui estão seus dados
- **404 Not Found**: Recurso não encontrado
- **400 Bad Request**: Parâmetros inválidos
- **401 Unauthorized**: Precisa fazer login
- **500 Internal Server Error**: Erro no servidor

## Exemplo Prático Completo 🎯

Imagine uma API de biblioteca:

```javascript
// Buscar todos os livros
GET /livros

// Buscar livro específico
GET /livros/isbn-123456

// Buscar livros com filtros
GET /livros?autor=Machado&disponivel=true

// Buscar comentários de um livro
GET /livros/isbn-123456/comentarios

// Buscar com paginação
GET /livros?pagina=3&itens_por_pagina=10
```

## Comparação Visual 📊

```
API REST - Biblioteca

GET    /livros           → Lista todos (LER)
POST   /livros           → Adiciona novo livro (CRIAR)
GET    /livros/123       → Busca livro 123 (LER)
PUT    /livros/123       → Atualiza livro 123 (ATUALIZAR)
DELETE /livros/123       → Remove livro 123 (DELETAR)
```

Viu como **GET** é sempre para **buscar/ler**, nunca para modificar? 🔍

---

**Resumo**: Uma rota GET é um endereço em uma API que você chama para **buscar informações** sem modificar nada. É como fazer uma pergunta - você recebe uma resposta, mas não muda nada no processo!

  