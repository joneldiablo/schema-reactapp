import React from "react";
import Template from "../containers/template";
import Info from "./info";

export default class TemplateEditor extends React.Component {

  render() {
    return <Info {...this.props} borderColor="red">
      <Template {...this.props} />
    </Info>
  }
}