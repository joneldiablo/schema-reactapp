import React from "react";

export default class Page extends React.Component {

  static defaultProps = {
    className: '',
    style: {}
  };

  render() {
    let { className, style, id } = this.props;
    let classNameJoin = [this.constructor.name, className].join(' ');
    return <article className={classNameJoin} id={this.constructor.name + '-' + id} style={style}>
      {this.props.children}
    </article>
  }
}