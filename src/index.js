import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Book from './modules/Book'
import AddBookForm from './modules/AddBookForm.js'

class Shelf extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      showBookForm: false,
      showEditForm: false,
    }
  }
  addBook = (ID, name, author, date, read) => {
    const books = [...this.state.books]
    const newBook = {ID, name, author, date, read}
    books.push(newBook)
    this.setState({ books: books })
  }
  removeBook = (ID) => {
    const books = [...this.state.books];
    const filtered = books.filter(book => book.ID !== ID)
    this.setState( {books: filtered} )
  }
  editBook = (ID, name, author, date, read) => {
    const books = [...this.state.books];
    books[ID].name = name;
    books[ID].author = author;
    books[ID].date = date;
    books[ID].read = read;
    this.setState( {books: books} )
  }

  handleBookForm = () => {
    this.setState( {showBookForm: !this.state.showBookForm} )
  }
  toggleRead = (ID) => {
    const books = [...this.state.books];
    console.log(books[ID].read)
    books[ID].read = !books[ID].read;
    this.setState( {books} );
  }

  render () {
    const bookList = this.state.books.map((book, bookIndex) => {
      return (
        <Book key={book.ID}
        bookIndex={bookIndex}
        index={book.ID}
        book={book}
        removeBook={this.removeBook}
        handleBookForm={this.handleBookForm}
        editBook={this.editBook}
        toggleRead = {this.toggleRead}
        handleBookEditForm={this.handleBookEditForm}
        showEditForm={this.state.showEditForm}
        />
      )
  })
    return (
      <div className="shelf">
        <div className="tittle">
        <h1>Welcome!</h1>
        <h2>This is Odin Library</h2>
        </div>
        <button onClick={ this.handleBookForm } className="add-book">Add Book</button>
        <div className="book-list">{bookList}</div>
          {this.state.showBookForm ? 
            <AddBookForm 
              ID={Date.now()}
              addBook={this.addBook} 
              handleBookForm={this.handleBookForm}
              /> :
              null
          }
      </div>
    )
  }
}


// ========================================

ReactDOM.render(
  <Shelf />,
  document.getElementById('root')
);

