import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.eachFaq = props.eachFaq
    this.state = {iconIsClicked: false}
  }

  onShowHide = () => {
    this.setState(preState => ({iconIsClicked: !preState.iconIsClicked}))
  }

  render() {
    const {questionText, answerText} = this.eachFaq
    const {iconIsClicked} = this.state
    const imgUrl = iconIsClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = !iconIsClicked ? 'plus' : 'minus'

    return (
      <li className="li-container">
        <div className="ques-img">
          <h1>{questionText}</h1>
          <button type="button" onClick={this.onShowHide}>
            <img src={imgUrl} alt={imgAlt} />
          </button>
        </div>
        {iconIsClicked && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
