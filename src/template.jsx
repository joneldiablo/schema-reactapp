import React from "react";
import { randomS4 } from "./functions";
import Info from "./info";

export default class Template extends React.Component {
  style = {
    border: '1px solid red',
    padding: '2px',
    margin: '2px',
  }
  id = this.props.type + '-' + randomS4();

  render() {
    return <div style={this.style} className='template'>
      <Info {...this.props} />
      {this.props.children}
    </div>
  }
}