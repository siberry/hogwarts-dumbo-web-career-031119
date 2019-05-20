import React from 'react'

class HogCard extends React.Component{
  state = {
    clicked: false,
  }

  makeImgUrl(hogName){
    return "/hog-imgs/" + hogName.toLowerCase().split(" ").join("_") + ".jpg"
  }
  /* if images file not in public
    <img src={require(`../hog-imgs/${makeImgUrl(hogName)}`)}
  */
  handleClick = (event) => {
    this.setState(prevState => {
      return {clicked: !this.state.clicked}
    })
  }

  render() {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const medal = 'highest medal achieved'
    return (
      <div onClick={this.handleClick} className="card">
        <h3>{this.props.name}</h3>
        {this.state.clicked ?
          <div className="description">
            <b>specialty:</b> {this.props.specialty}<br/>
            <b>{weight}:</b> {this.props[weight]} <br/>
            <b>{this.props.greased ? null : "Not "} Greased</b>
          <b>{medal}:</b> {this.props[medal]}
          </div>
        :
        <div> <div className="image"> <img src={this.makeImgUrl(this.props.name)} alt={this.props.name}/></div>
        </div>
        }
      </div>
    )
  }
}

export default HogCard
