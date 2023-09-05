import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.faqsList = props.faqsList
    this.state = {showFaqsList: []}
  }

  onShowHide = id => {
    const {showFaqsList} = this.state
    if (showFaqsList.includes(id)) {
      const filteredFaqsList = showFaqsList.filter(eachID => eachID !== id)
      this.setState({showFaqsList: filteredFaqsList})
    } else {
      this.setState({showFaqsList: [...showFaqsList, id]})
    }
  }

  render() {
    const {showFaqsList} = this.state
    console.log(showFaqsList)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="h1">Faqs</h1>
          <ul>
            {this.faqsList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                eachFaq={eachFaq}
                showFaqsList={showFaqsList}
                onShowHide={this.onShowHide}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
