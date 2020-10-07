import React from "react";
import IcoMoon from "react-icomoon";
const selection = require('../icons/selection.json');

export default class Icons extends React.Component {
  static defaultProps = {
    inline: true,
    className: ''
  }
  inline = {
    width: '1.2em',
    verticalAlign: 'text-bottom'
  }
  render() {
    let props = { ...this.props };
    props.className += ' icon';
    props.style = props.style || {};
    if (this.props.inline)
      props.style = Object.assign({}, this.inline, props.style);
    delete props.inline;
    return <IcoMoon iconSet={selection} {...props} />;
  }
}