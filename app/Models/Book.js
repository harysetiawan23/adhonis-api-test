'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');


class Book extends Model {


  static getTable(){
    return 'books'
  }

  static getPrimaryKey(){
    return 'id'
  }



}

module.exports = Book
