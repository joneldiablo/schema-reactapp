import React from "react";
import importedComponent from 'react-imported-component';
import findComponent from "./find-component";
import Info from "./info";

export default class Section extends React.Component {

  style = {
    border: '1px solid black',
    padding: '2px',
    margin: '2px'
  };

  state = {
    Component: importedComponent(() => {
      let path = findComponent(this.props.type) || this.props.from;
      // use the template string (`...`) because "import" function not working with variables
      return import(`${path}`);
    }, {
      LoadingComponent: () => 'loading',
      ErrorComponent: () => 'error'
    })
  }

  componentDidMount() {

  }

  render() {
    let { allowChildren, attributes } = this.props;
    let { Component } = this.state;
    return <section style={this.style} className='section'>
      <Info {...this.props} />
      <Component {...attributes}>
        {allowChildren && this.props.children}
      </Component>
    </section>
  }
}