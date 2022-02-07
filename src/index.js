import React from 'react'
import ReactDom from 'react-dom'

// 无状态组件
// 必须要返回 jsx 否则会报错

/** JSX规则
 * 1. return 单个根标签
 * 2. 容器可使用div / section / article / Fragment / <></>
 * 3. html属性名使用驼峰命名法
 * 4. className 替换 class
 * 5. 每个标签必须有 封闭 /
 * 6. () 格式化 将标签用()包裹起来 与return分开距离也没关系
 */

function Greeting() {
  return (
    <>
      <div className="container">
        <h4>Hello 米修!</h4>
        <ul>
          <li>
            <a href="#">米修</a>
          </li>
        </ul>
      </div>
      <div></div>
    </>
  )
}

// 箭头函数
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello 米修!'),
//   )
// }

ReactDom.render(<Greeting />, document.getElementById('root'))
