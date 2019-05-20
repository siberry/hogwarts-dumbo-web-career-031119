import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'

class App extends Component {
  state = {
    sort: null
  }

  compareName(a,b) {
    const nameA = a.name
    const nameB = b.name

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1
    } else if (nameA < nameB) {
      comparison = -1
    }

    return comparison;
  }
  compareWeight(a,b) {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const weightA = a[weight]
    const weightB = b[weight]

    if (weightA > weightB) {
      return 1
    } else if (weightA < weightB) {
      return -1
    } else {
      return 0
    }
  }

  handleChange = (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  sortHogs = () => {
    switch (this.state.sort) {
      case "weight":
        return [...hogs].sort(this.compareWeight);
      case 'name':
        return [...hogs].sort(this.compareName);
      case 'greased':
        return hogs.filter(hog => hog.greased)
      case 'notGreased':
        return hogs.filter(hog => !hog.greased)
      default:
        return hogs
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <select onChange={this.handleChange}>
          <option value={null}></option>
          <option value="weight">Weight</option>
          <option value="name">Name</option>
          <option value="greased">Greased</option>
          <option value="notGreased">Not Greased</option>
        </select>
        <HogsContainer hogs={this.sortHogs()} />
      </div>
    )
  }
}

export default App;
