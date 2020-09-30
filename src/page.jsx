import React from "react";
import { randomS4 } from "./functions";
import Info from "./info";

export default class Page extends React.Component {
  style = {
    border: '1px solid blue',
    padding: '2px',
    margin: '2px'
  }

  id = this.props.type + '-' + randomS4();

  render() {
    return <article style={this.style} className="page">
      <Info {...this.props} />
      {this.props.children}
    </article>
  }
}