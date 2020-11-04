import React from "react";
import { NavLink } from "react-router-dom";
import Icons from "../icons";

export default class NavSide extends React.Component {
  static defaultProps = {
    menu: [],
    iconSize: 40
  }

  state = {
    stick: false,
    icon: 'chevron-right'
  }

  stick = (e) => {
    this.setState({
      stick: !this.state.stick,
      icon: this.state.stick ? 'chevron-right' : 'thumb-tack'
    }, () => window.focus());
  }

  render() {
    let { menu, iconSize } = this.props;
    let { stick, icon } = this.state;
    let className = 'nav-side ' + (stick ? 'stick' : '');
    return (<div className={className}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <div className="nav-link clearfix px-0">
            <div style={{ width: iconSize, height: iconSize }} className="d-flex justify-content-end align-items-center float-right">
              <span className="wrap-collapse-arrow" style={{ cursor: 'pointer' }} onClick={this.stick}>
                <Icons icon={icon} className="collapse-arrow" />
              </span>
            </div>
          </div>
        </li>
        {menu.map((item, i) =>
          <li className="nav-item" key={i}>
            <NavLink to={item.path} className="nav-link"
              exact={item.exact} activeClassName='active'>
              <Icons icon={item.icon} inline={false} width={iconSize} height={iconSize} />
              <span className="text-collapse">{item.label}</span>
            </NavLink>
          </li>
        )}
      </ul>
    </div>);
  }
}