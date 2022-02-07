import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function Greeting() {
  return (
    <section className="booklist">
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg"
    alt=""
  />
)
const Title = () => <h1>我看见的未来</h1>
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    龙树谅
  </h4>
)

ReactDom.render(<Greeting />, document.getElementById('root'))
