import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../functions";
import Icons from "../icons";

export default class NavCards extends React.Component {
  static defaultProps = {
    menu: []
  }

  render() {
    let { menu } = this.props;
    return <div className="row">
      {menu.map((item, i) =>
        <div className="col" key={i}>
          <div className="card" style={{ backgroundImage: `url(${assets('images', item.image)})` }}>
            <div className="card-body">
              <h5 className="card-title nav-item">
                {item.label}
                <hr className="my-1" />
              </h5>
              <p className="card-subtitle mb-2 text-muted">
                {item.description}
              </p>
              <Link to={item.path} className="stretched-link"></Link>
            </div>
          </div>
        </div>
      )}
    </div>;
  }
}