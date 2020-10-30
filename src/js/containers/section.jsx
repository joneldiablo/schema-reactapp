import React from "react";
import { randomS4 } from "../functions";

export default class Section extends React.Component {

  static defaultProps = {
    className: [],
    style: {}
  }

  id = this.constructor.name + '-' + randomS4();

  render() {
    let { attributes,
      Component, style, className } = this.props;
    if (typeof className === 'string') className = className.split(' ');
    className.push(this.constructor.name);
    let cn = new Set(className);
    className = Array.from(cn);
    return <section className={className.join(' ')} id={this.id} style={style}>
      <Component {...attributes} >
        {this.props.children}
      </Component>
    </section>
  }
}