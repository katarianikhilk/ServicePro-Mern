import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }
  componentDidMount() {
    this.position();
    console.log(this.state.latitude)
    
  }

  

  position = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      err => console.log(err)
    );
    console.log(this.state.latitude)
    
  }

  render() {
    return (
      <div>
        <button onClick={this.position} className='Filter'>Filter</button>
      </div>
    );
  }
}

export default App;