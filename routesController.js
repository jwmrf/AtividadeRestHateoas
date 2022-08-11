
const crypto = require('crypto')
function Teste(req, res) {
    res.send("HELLO WORLD PARCEIRO")
}

function Listar(req, res) {
    res.send(GetLinks())
}

function ListarPorCategoria(req, res) {
    //console.log(req.get('Accept'));    
    //console.log(req.accepts('application/json')); 
    let id = req.params.id
    let categoria = data.find( el => el.id == id)
    res.send( categoria ? categoria : "Categoria Não Encontrada")
}

function Adicionar(req, res) {
    let item = {
        id : crypto.randomUUID(),
        titulo: req.body.titulo,
        filmes: req.body.filmes
    }
    data.push(item)
    res.send(item)
}

function Editar(req, res) {
    let id = req.params.id
    let index = data.findIndex( el => el.id == id)
    let item = {
        id : id,
        titulo: req.body.titulo,
        filmes: req.body.filmes
    }
    data[index] = item
}

function Excluir(req, res) {
    let id = req.params.id
    let index = data.findIndex( el => el.id == id)
    data.splice(index, 1)
    res.send("Removido")
}

function GetLinks() {
    let count = 0
    let link = 'http://localhost:3000/categorias/'
    for (let dado of data) {
        data[count].link = link + dado.id
        count ++
    }
    return data

}

module.exports = {
    Listar,
    ListarPorCategoria,
    Adicionar,
    Excluir,
    Editar,
    Teste
}

//Data Filmes - Categoria / Nome de Filmes
var data = [
    {
        "id" : crypto.randomUUID(),
        "titulo" : "Comédia",
        "filmes" : ["Se beber não case"] },
    {
        "id" : crypto.randomUUID() ,
        "titulo" : "Aventura",
        "filmes" : ["G.I. JOE"]
    }
]