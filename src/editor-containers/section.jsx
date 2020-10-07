import React from "react";
import Section from "../containers/section";
import Info from "./info";

export default class SectionEditor extends React.Component {

  render() {
    return <Info {...this.props} >
      <Section {...this.props} />
    </Info>
  }
}