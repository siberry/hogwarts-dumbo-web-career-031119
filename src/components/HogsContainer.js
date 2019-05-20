import React from 'react'
import HogCard from './HogCard'

class HogsContainer extends React.Component {


  renderHogCards() {
    return this.props.hogs.map((hog, i) => <HogCard key={i} {...hog}/>)
  }

  render() {
    return(
      <div>
        <div className="ui three stackable cards">
          {this.renderHogCards()}
        </div>
      </div>
    )
  }
}

export default HogsContainer
