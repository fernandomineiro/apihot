'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/api/admin', 'AdminController.index') 
Route.get('/api/logar', 'AdminController.logar')
Route.post('/api/criartipo', 'AdminController.criartipo')
Route.post('/api/criarproduto', 'AdminController.criarproduto')
Route.put('/api/editartipo', 'AdminController.editartipo')
Route.put('/api/editarproduto', 'AdminController.editarproduto')
Route.delete('/api/excluirtipo', 'AdminController.excluirtipo')
Route.delete('/api/excluirproduto', 'AdminController.excluirproduto')