import React from "react";
import { randomS4 } from "../functions";

export default class Template extends React.Component {

  static defaultProps = {
    className: [],
    style: {}
  }

  id = this.constructor.name + '-' + randomS4();

  get useGrid() {
    let { useGrid, children } = this.props;
    return (<div className={'row ' + useGrid.row}>
      {children.map((c, i) =>
        <div key={i} className={"col " + useGrid.columns[i].className}
          style={useGrid.columns[i].style}>{c}</div>)}
    </div>);
  }

  render() {
    let { style, className, useGrid, children } = this.props;
    if (typeof className === 'string') className = className.split(' ');
    className.push(this.constructor.name);
    className = Array.from((new Set(className)));
    return <div id={this.id} className={className.join(' ')} style={style}>
      {!!useGrid ?
        this.useGrid :
        children}
    </div>
  }
}