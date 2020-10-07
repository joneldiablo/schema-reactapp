import React from "react";
import { randomS4 } from "../functions";

export default class Page extends React.Component {

  id = this.constructor.name + '-' + randomS4();

  render() {
    return <article className={this.constructor.name} id={this.id}>
      {this.props.children}
    </article>
  }
}