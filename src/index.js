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
const firstBook = {
  img:
    'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg',
  title: '我看见的未来!!',
  author: '龙树谅',
}

const secondBook = {
  img:
    'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg',
  title: '你看见的未来',
  author: '吴树谅',
}

const thirdBook = {
  img:
    'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg',
  title: '他看见的未来',
  author: '海树谅',
}

function Greeting() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid
          doloribus accusamus quibusdam molestiae fugiat beatae praesentium sunt
          dolorem maxime.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  console.log(props)

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={authorStyle}>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
