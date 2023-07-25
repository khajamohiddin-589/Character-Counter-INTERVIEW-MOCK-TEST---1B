import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CharList from '../CharList'
import './index.css'

class CharCounter extends Component {
  state = {
    objList: [],
    text: '',
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {text} = this.state
    const obj = {id: uuidv4(), text, length: text.length}
    console.log(obj)
    this.setState(prevState => ({
      objList: [...prevState.objList, obj],
      text: '',
    }))
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, objList} = this.state
    console.log(objList)
    const condition = objList.length === 0
    return (
      <div className="main-container">
        <div className="left-container">
          <h1 className="counting-heading">
            Count the characters like a Boss...
          </h1>
          {condition ? (
            <img
              className="no-user-image"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul className="list">
              {objList.map(each => (
                <CharList each={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
        <form className="right-container" onSubmit={this.onClickAddButton}>
          <h1 className="char-count-heading">Character Counter</h1>
          <div className="adding-container">
            <input
              value={text}
              onChange={this.onChangeText}
              type="text"
              className="search-text"
              placeholder="Enter the Characters here"
            />
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CharCounter
