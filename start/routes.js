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
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});
//User Auth
Route.group(()=>{
  Route.post('login','AuthController.login')
}).prefix('api/v1');


//Content [Book]
Route.group(()=>{
  Route.get('books/','BookController.index').middleware(['auth']);
  Route.get('books/:id','BookController.book');
  Route.put('books/:page','BookController.page');
  Route.post('store-book','BookController.store');
  Route.put('update-book/:id','BookController.update');
  Route.delete('delete-book/:id','BookController.delete');
}).prefix('api/v1');
