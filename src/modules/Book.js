import React, {useState} from 'react';
import BookEditForm from './BookEditForm'
function Book (props) {
  const [bookForm, setBookForm] = useState(false);
  const {name, date, author} = props.book;
  const handleRemove = () => {
      props.removeBook(props.index);
  }
  const handleEdit = () => {
      setBookForm(!bookForm);
  }
  const handleToggle = () => {
    props.toggleRead(props.bookIndex);
}
  
  return (
    <div className="book">
        <p className="title">Title: {name}</p>
        <p className="author">Author: {author}</p>
        <p className="date">Date Created: {date}</p>
        <div className="book-buttons">
        <button onClick={handleToggle}className={props.book.read ? 'read' : 'not-read'}>{props.book.read ? 'Read' : 'Not Read'}</button>
        <button onClick={handleEdit} className="edit">Edit Book</button>
        <button onClick={handleRemove} className="delete">Delete</button>
        </div>
        {bookForm ?
          <BookEditForm 
              handleEdit={handleEdit}
              bookIndex={props.bookIndex}
              editBook={props.editBook}
              index={props.index}
              book={props.book} /> :
              null
        }
    </div>
  )
}

export default Book