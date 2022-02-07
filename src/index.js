import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

const authorStyle = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.25rem',
}

// 重构数据
const books = [
  {
    id: 1,
    img:
      'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg',
    title: '我看见的未来!!',
    author: '龙树谅',
  },
  {
    id: 2,
    img:
      'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg',
    title: '你看见的未来',
    author: '吴树谅',
  },
  {
    id: 3,
    img:
      'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg',
    title: '他看见的未来',
    author: '海树谅',
  },
]

function Greeting() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} book={book} />
      })}
    </section>
  )
}

const handleClick = (e) => {
  console.log(e)
  console.log(e.target)
}

const passParams = (author) => {
  console.log(author)
}

const Book = (props) => {
  const { img, title, author, children } = props.book

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 style={authorStyle}>{author}</h4>
      {children}

      <button onClick={handleClick}>按钮</button>

      <button onClick={() => passParams(author)}>传参</button>
    </article>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
