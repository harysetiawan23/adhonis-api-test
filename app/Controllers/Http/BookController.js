'use strict'

const Book = use('App/Models/Book');

class BookController {


  async page({request,response}){
    const {page} = request.all();

    if(!page){
      const book = await Book.all();
      return response.status(200).json(book)
    }
    const book = await Book.query().paginate(page,10);
    return response.status(200).json(book)
  }


  async store({request,response}){
    const bookinfo = request.only(['title','isbn','publisher_name','author_name']);

    const book = new Book();

    book.title = bookinfo.title;
    book.isbn = bookinfo.isbn;
    book.publisher_name = bookinfo.publisher_name;
    book.author_name = bookinfo.author_name;

    await book.save();

    return response.status(201).json(book)

  }

  async update({params,request,response}){
    const bookInfo = request.only(['title','isbn','publisher_name','author_name']);

    const book = await Book.find(params.id);
    if(!book){
      return response.status(404).json({data:'Book Not Found'})
    }

    book.title = bookInfo.title;
    book.isbn = bookInfo.isbn;
    book.publisher_name = bookInfo.publisher_name;
    book.author_name = bookInfo.author_name;

    await book.save();

    return response.status(200).json(book)


  }


  async delete({params,response}){
    const book = await Book.find(params.id);

    if(!book){
      return response.status(404).json({data:"Book not Found"});
    }

    await book.delete()

    return response.status(200).json({status:'delete success'});
  }
}

module.exports = BookController
