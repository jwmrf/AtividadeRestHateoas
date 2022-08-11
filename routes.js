const routes = require('express').Router()
const metodos = require('./routesController')

routes.get('/categorias', metodos.Listar)
routes.get('/categorias/:id', metodos.ListarPorCategoria);
routes.post('/categorias/', metodos.Adicionar)
routes.put('/categorias/:id', metodos.Editar)
routes.delete('/categorias/:id', metodos.Excluir)

routes.get('/', function (req, res) {
  var personSchema = {
    "name": "Categoria",
    "description": "Propriedades de categoria",
    "properties": {
        "id": {
            "title": "Identificador",
            "description": "Gerado automaticamente",
            "type": "string"
        },
        "titulo": {
            "title": "Titulo da categoria, ex: 'Comédia'",
            "type": "string",
            "required": true
        },
        "filmes": {
            "title": "Lista de filmes",
            "description": "Lista com o nome dos filmes pertecentes a categoria",
            "type": "Array <string>",
            "required": true
        }
    }
};

// call res.json as normal but pass second param as array of links
res.json(personSchema, [
    { method: "GET", title: 'Listar categorias', href: 'http://localhost:3000/categorias/' },
    { method: "POST", title: 'Criar categoria de filmes', href: 'http://localhost:3000/categorias/' },
    { method: "DEL", title: 'Deletar categoria de filmes', href: 'http://localhost:3000/categorias/' },
    { method: "PUT", title: 'Editar categoria de filmes', href: 'http://localhost:3000/categorias/' }
]);
  })

module.exports = routes
