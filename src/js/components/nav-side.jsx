import React from "react";
import { NavLink } from "react-router-dom";
import Icons from "../icons";

export default class NavSide extends React.Component {
  static defaultProps = {
    menu: [],
    iconSize: 40
  }

  render() {
    let { menu, iconSize } = this.props;
    return <ul className="nav flex-column nav-side">
      {menu.map((item, i) =>
        <li className="nav-item" key={i}>
          <NavLink to={item.path} className="nav-link"
            exact={item.exact} activeClassName='active'>
            <Icons icon={item.icon} inline={false} width={iconSize} height={iconSize} />
            <span className="text-collapse">{item.label}</span>
          </NavLink>
        </li>
      )}
    </ul>;
  }
}