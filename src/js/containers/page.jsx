import React from "react";
import { randomS4 } from "../functions";

export default class Page extends React.Component {

  static defaultProps = {
    className: '',
    style: {}
  };

  id = this.constructor.name + '-' + randomS4();

  render() {
    let { className, style } = this.props;
    let classNameJoin = [this.constructor.name, className].join(' ');
    return <article className={classNameJoin} id={this.id} style={style}>
      {this.props.children}
    </article>
  }
}