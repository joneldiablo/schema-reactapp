import React from "react";
import ResizeSensor from "css-element-queries/src/ResizeSensor";
import eventEmitter from "../event-emitter";

export default class Container extends React.Component {

  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }

  onResize = () => {
    clearTimeout(this.onResizeTimeout);
    this.onResizeTimeout = setTimeout(() => {
      let { offsetWidth: width, offsetHeight: height } = this.wrapper.current;
      eventEmitter.dispatch('resize', {
        width,
        height
      });
    }, 200);
  }

  componentDidMount() {
    if (this.props.responsive)
      this.resizeSensor = new ResizeSensor(this.wrapper.current, this.onResize);
  }

  componentWillUnmount() {
    clearTimeout(this.onResizeTimeout);
  }

  render() {
    let { id, className, style } = this.props;
    return <div id={id} ref={this.wrapper} className={className} style={style}>
      {this.props.children}
    </div>
  }
}