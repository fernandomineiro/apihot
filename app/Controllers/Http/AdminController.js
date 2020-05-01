'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with admins
 */
const Database = use('Database')
class AdminController {
  
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('usuario')
    return response.json(a)
  }
 
  
  async logar ({ request, response, view }) {
    const usuario = request.input('usuario');
    const senha = request.input('senha');
    const a = await Database.raw(` select nome from usuario where usuario='${usuario}'  and senha = '${senha}'`)
    return response.json(a)

  }

  
  async criartipo ({ request, response }) {
    const tipo = request.input('tipo');
    const a = await Database.raw(` INSERT INTO tipo (tipo) VALUES ('${tipo}') `)
    return response.json(a)
  }

  async criarproduto ({ request, response }) {
    const nome = request.input('nome');
    const valor = request.input('valor');
    const tipo = request.input('tipo');
    const a = await Database.raw(` INSERT INTO produto (nome, valor, id_tipo) VALUES ('${nome}', '${valor}', '${tipo}') `)
    return response.json(a)
  }

  async editartipo ({ params, request, response }) {
    const tipo = request.input('tipo');
    const id = request.input('id');
    const a = await Database.raw(` UPDATE tipo set tipo='${tipo}' WHERE id = '${id}'`)
    return response.json(a)
  }

  async editarproduto({ params, request, response }) {
    const nome = request.input('nome');
    const valor = request.input('valor');
    const id = request.input('id');
    const a = await Database.raw(` UPDATE produto set nome='${nome}', valor='${valor}' WHERE id = '${id}'`)
    return response.json(a)
  }




  async excluirtipo ({ params, request, response, view }) {
    const id = request.input('id');
    const a = await Database.raw(` DELETE FROM tipo WHERE id = '${id}'`)
    return response.json(a)
  }

  
  async excluirproduto ({ params, request, response, view }) {
    const id = request.input('id');
    const a = await Database.raw(` DELETE FROM produto WHERE id ='${id}' `)
    return response.json(a)
  }

  
  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = AdminController
