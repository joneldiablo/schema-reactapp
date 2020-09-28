import React from "react";
import {
  Router,
  HashRouter,
  BrowserRouter,
  Route,
  withRouter,
  Link,
  Switch
} from "react-router-dom";
import urlJoin from "url-join";

export default class Controller extends React.Component {

  static defaultProps = {

  }

  state = {
    mapRoutes: {}
  }

  sections() {

  }

  pages(pageObj) {
    if (typeof pageObj === 'string') {
      let page = pageObj.replace('$pages.', '');
      return this.props.schema.pages[page];
    }
    return pageObj;
  }

  menus() {

  }

  mapRoutes(schema, parent = '/') {
    let type = Array.isArray(schema) ? 'array' : typeof schema;
    let allPaths = {};
    switch (type) {
      case 'array': {
        schema.forEach(route => {
          Object.assign(allPaths, this.mapRoutes(route, parent));
        });
        break;
      }
      case 'object': {
        let { content, children, path } = schema;
        let url;
        if (Array.isArray(path)) {
          path.forEach(p => {
            url = urlJoin(parent, p);
            if (content) Object.assign(allPaths, this.mapRoutes(content, url));
          });
        } else {
          url = urlJoin(parent, path || '/');
          if (content) Object.assign(allPaths, this.mapRoutes(content, url));
        }
        if (children)
          Object.assign(allPaths, this.mapRoutes(children, url));
        break;
      }
      default: {
        allPaths = {
          [parent]: {
            id: schema,
            content: this.pages(schema)
          }
        };
      }
    }
    return allPaths;
  }

  getRoutes(schema, parent = '/', key) {
    let type = Array.isArray(schema) ? 'array' : typeof schema;
    switch (type) {
      case 'array': {
        return <Switch>
          {schema.map((schemaItem, i) => this.getRoutes(schemaItem, parent, i))}
        </Switch>
      }
      case 'object': {
        const getThisPaths = (thisRoutes) => {
          return thisRoutes.map(r => {
            if (!r.path)
              return getThisPaths(r.children);
            if (Array.isArray(r.path)) {
              return r.path.map(p => urlJoin(parent, p));
            }
            return urlJoin(parent, r.path || '')
          });
        }
        let { template, content, children, path, exact } = schema;
        let absPath = Array.isArray(path) ?
          path.map(p => urlJoin(parent, p))
          : urlJoin(parent, path || '/');
        let props = {
          path: path ? absPath : getThisPaths(children).flat(),
          key,
          exact
        }
        return <Route {...props}>
          <ul>
            {template && <li>template: {template}</li>}
            {content && <li>content: {content}</li>}
            <li>path: {JSON.stringify(props.path)}</li>
          </ul>
          {children && this.getRoutes(children, absPath)}
        </Route>
      }
      default:
        throw 'Invalid type: ' + type;
    }
  }

  render() {
    const rs = this.mapRoutes(this.props.schema.routes);
    const routes = this.getRoutes(this.props.schema.routes);
    return <div>
      <ul>
        {Object.keys(rs).map(route =>
          <li key={route}><Link to={route}>{rs[route].id}</Link></li>
        )}
      </ul>
      <hr />
      {routes}
    </div>
  }
}

export const RouterController = (props) => {
  return (<Router history={props.history}><Controller {...props} /></Router>);
}

export const BrowserRouterController = (props) => {
  let RouterSchema = withRouter(Controller);
  return (<BrowserRouter><RouterSchema {...props} /></BrowserRouter>);
}

export const HashRouterController = (props) => {
  let RouterSchema = withRouter(Controller);
  return (<HashRouter><RouterSchema {...props} /></HashRouter>);
}