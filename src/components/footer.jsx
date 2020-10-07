import React from "react";
import { NavLink } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    let { menu } = this.props;
    return <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-nav">
          {menu && menu.map((item, i) =>
            item && <NavLink key={i} to={item.path} className="nav-link" exact={item.exact} activeClassName='active'>{item.label}</NavLink>
          )}
        </div>
      </div>
    </nav>
  }
}