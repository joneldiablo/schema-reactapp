import React from "react";
import { randomS4 } from "../functions";

export default class Section extends React.Component {

  id = this.constructor.name + '-' + randomS4();

  render() {
    let { allowChildren, attributes, Component } = this.props;
    return <section className={this.constructor.name} id={this.id}>
      <Component {...attributes}>
        {allowChildren && this.props.children}
      </Component>
    </section>
  }
}