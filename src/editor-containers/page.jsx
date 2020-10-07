import React from "react";
import Page from "../containers/page";
import Info from "./info";

export default class PageEditor extends React.Component {

  render() {
    return <Info {...this.props} borderColor="blue">
      <Page {...this.props} />
    </Info>
  }
}