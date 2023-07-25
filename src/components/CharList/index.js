import './index.css'

const CharList = props => {
  const {each} = props
  const {text, length} = each
  return (
    <li className="item">
      {' '}
      <p className="text">
        {text} : <span className="span">{length}</span>
      </p>
    </li>
  )
}

export default CharList
