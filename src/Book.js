const authorStyle = {
  color: '#617d98',
  fontSize: '0.75rem',
  marginTop: '0.25rem',
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

export default Book
