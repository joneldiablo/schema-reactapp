import React from "react";
import { randomS4 } from "../functions";

export default class Template extends React.Component {

  id = this.constructor.name + '-' + randomS4();

  render() {
    return <div className={this.constructor.name} id={this.id}>
      {this.props.children}
    </div>
  }
}