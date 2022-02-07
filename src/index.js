import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>米斯特吴</h2>
const Message = () => <p>hello world</p>

ReactDom.render(<Greeting />, document.getElementById('root'))
