import React from 'react';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI5YWYxYjM2NDEwMzEzYzc5MzUyNiIsIm5hbWUiOiJOaWtoaWwgS2F0YXJpYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTkxODE5OTUsImV4cCI6MTY1MDczODkyMX0.ZGjdQ5wOJeSnVv7XYaloaVvdQVvieCmqqdnLIDtGvAU";



export default class serviceList extends React.Component {

  state = {
    list:[],
  };

  componentDidMount() {
    axios.get('/service/?long=28.1862388&latt=75.4982336&service=AC').then(res=>{
      console.log(res);
      this.setState({list:res.data}) ;
    });
  }

  render() {
    return (
      <u1>
        {this.state.list.map(store=> <li>{store.name}</li>)}
      </u1>
    )
  }

}
