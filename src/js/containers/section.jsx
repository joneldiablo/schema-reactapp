import React from "react";
import { randomS4 } from "../functions";

export default class Section extends React.Component {

  static defaultProps = {
    sticky: false,
    fixed: false, //top|bottom
    background: false,//'light',
    shadow: false,//sm,lg
    textColor: false,//sm,lg
    position: 'relative'
  }

  id = this.constructor.name + '-' + randomS4();

  render() {
    let { allowChildren, attributes,
      Component, sticky, fixed, zIndex,
      background, shadow, textColor,
      position } = this.props;
    let className = [
      this.constructor.name,
      sticky && 'sticky-top',
      fixed && (typeof fixed === 'string' ? 'fixed-' + fixed : 'fixed-top'),
      background && 'bg-' + background,
      shadow && (typeof shadow === 'string' ? 'shadow-' + shadow : 'shadow'),
      textColor && 'text-' + textColor
    ].filter(c => c).join(' ');
    let style = {
      zIndex,
      position
    }
    return <section className={className} id={this.id} style={style}>
      <Component {...attributes}>
        {allowChildren && this.props.children}
      </Component>
    </section>
  }
}