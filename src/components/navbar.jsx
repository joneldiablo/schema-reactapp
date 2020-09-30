import React from "react";
import { NavLink } from "react-router-dom";
import { randomS4 } from "../functions";

export default class Header extends React.Component {
  id = this.props.type + '-' + randomS4();
  render() {
    let { logo, logoHeight, site, menu } = this.props;

    return <nav className="navbar navbar-light bg-light navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt={site} height={logoHeight} />
          {site}
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={'#' + this.id}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id={this.id}>
          <div className="navbar-nav ml-auto">
            {menu && menu.map((item, i) =>
              <NavLink key={i} to={item.path} className="nav-link" exact={item.exact} activeClassName='active'>{item.label}</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  }
}