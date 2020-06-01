import React from 'react';

function AddBookForm (props) {
  let nameInput = React.createRef();
  let authorInput = React.createRef();
  let dateInput = React.createRef();
  let readInput = React.createRef();
  const handleClick = (event) => {
    event.preventDefault()
    props.addBook(Date.now(), nameInput.current.value, authorInput.current.value, dateInput.current.value, readInput.current.checked)
    props.handleBookForm()
  }
      
  return (
    <div className="form-background">
      <form className="book-form">
        <label htmlFor="name">Book Title</label>
        <input ref={nameInput} type="text" name="name" id="name" placeholder="Enter Book Title"></input>
        <label htmlFor="author">Author</label>
        <input ref={authorInput} type="text" name="author" id="author" placeholder="Enter Book Author"></input>
        <label htmlFor="name">Date Created</label>
        <input ref={dateInput} type="number" name="date" id="date" placeholder="Enter Date Created"></input>
        <label htmlFor="read">Did u read it?</label>
        <input className="checkbox" ref={readInput} type="checkbox" name="read" id="read"></input>
        <button onClick={handleClick}type="submit">Submit</button>
        <button onClick={props.handleBookForm}>Cancel</button>
      </form>
    </div>
  ) 
}

export default AddBookForm