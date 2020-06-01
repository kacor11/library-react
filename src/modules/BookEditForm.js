import React, {useState} from 'react';

function BookEditForm (props) {
  const {name: curName, date: curDate, author: curAuthor, read: curRead} = props.book
  const [name, setName] = useState(curName);
  const [author, setAuthor] = useState(curAuthor);
  const [date, setDate] = useState(curDate);
  const [read, setRead] = useState(curRead)

  const handleClick = (event) => {
    event.preventDefault()
    props.editBook(props.bookIndex, name, author, date, read)
    props.handleEdit()
  }
      
  return (
    <div className="form-background">
      <form className="book-form">
        <label htmlFor="name">Book Title:</label>
        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name}  placeholder="Enter Book Title"></input>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" onChange={(e) => setAuthor(e.target.value)} value={author}  placeholder="Enter Book Author"></input>
        <label htmlFor="name">Date Created:</label>
        <input type="number" name="date" id="date" onChange={(e) => setDate(e.target.value)} value={date}  placeholder="Enter Date Created"></input>
        <label htmlFor="read">Did u read it?</label>
        <input className="checkbox" type="checkbox" name="read" id="read" onChange={(e) => setRead(e.target.checked)} checked={read}></input>
        <button onClick={handleClick}type="submit">Edit</button>
        <button onClick={props.handleEdit} className="close-editform">Close</button>
      </form>
    </div>
  )
}

export default BookEditForm