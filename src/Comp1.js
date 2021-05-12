import React, { Component } from 'react';
import './App.css';

export default class Comp1 extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    
    return (
      <div className="Comp1">
      </div>
    )
  }
  
}
