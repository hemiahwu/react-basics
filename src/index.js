import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function Greeting() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="你看见的未来" number="22" />
      <Book title="他看见的未来" />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const title = '我看见的未来!!'
  const author = '龙树谅'
  const image =
    'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg'
  const authorStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.25rem',
  }

  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4 style={authorStyle}>{author}</h4>

      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
