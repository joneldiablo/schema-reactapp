import React from "react";

export default class Component extends React.Component {

  render() {
    return <div>
      hola mundo
      {this.props.children}
    </div>
  }
}