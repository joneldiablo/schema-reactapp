import React from "react";
import { NavLink } from "react-router-dom";
import urlJoin from "url-join";
import Icons from "../icons";

export default class NavService extends React.Component {
  static defaultProps = {
    url: '',
    iconSize: 40,
    iconDefault: 'image',
    iconFrom: 'icon',
    labelFrom: 'label',
    pathFrom: 'id'
  }

  state = {
    menu: []
  }

  constructor(props) {
    super(props);
    let { pathname } = this.props.location;
    var rex = pathname.substr(pathname.lastIndexOf('/')) + '$';
    this.path = pathname.replace(new RegExp(rex), '');
  }

  componentWillMount() {
    fetch(this.props.url)
      .then(r => r.json())
      .then(payload => {
        this.setState({ menu: payload });
      });
  }

  render() {
    let { iconDefault, iconSize, iconFrom, labelFrom, pathFrom } = this.props;
    let { menu } = this.state;
    return <ul className="nav flex-column nav-side">
      {menu.map((item, i) => <li className="nav-item" key={i}>
        <NavLink to={urlJoin(this.path, item[pathFrom] + '')} className="nav-link" activeClassName='active'>
          {item[iconFrom] ? <img src={item[iconFrom]} width={iconSize} height={iconSize} style={{ objectFit: 'cover' }} /> : <Icons icon={iconDefault} inline={false} width={iconSize} height={iconSize} />}
          <span className="text-collapse text-nowrap">{item[labelFrom]}</span>
        </NavLink>
      </li>
      )}
    </ul>;
  }
}