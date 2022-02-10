import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// javascript
import { books } from './books'
import Book from './Book'

function Greeting() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} book={book} />
      })}
    </section>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
