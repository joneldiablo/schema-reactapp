import React from "react";
import {
  HashRouter,
  BrowserRouter,
  withRouter,
  Route,
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import urlJoin from "url-join";
import importedComponent from 'react-imported-component';
import findComponent from "./find-component";
import mapRoutes from "./map-routes";
import Template from "./containers/template";
import Page from "./containers/page";
import Section from "./containers/section";
import getTransition from "./transitions";

export default class Controller extends React.Component {

  static defaultProps = {
    schema: { routes: [] },
    Template,
    Page,
    Section
  }

  state = {
    mapRoutes: mapRoutes(this.props.schema.routes),
    allRoutes: this.getRoutes(this.props.schema.routes)
    /*
modificar para usar la funcion de remplazo de referencias en todos lados, hacer que los objetos mezclen, usar elemento "ref" si es necesario....
sections: this.resolveRefs(this.props.schema.sections),
templates: this.resolveRefs(this.props.schema.templates),
routes: this.resolveRefs(this.props.schema.routes),
menus: this.resolveRefs(this.props.schema.menus),
pages: this.resolveRefs(this.props.schema.pages), */
  }

  resolveRefs(item) {
    if (Array.isArray(item)) {
      return item.map(a => this.resolveRefs(a));
    } else if (typeof item === 'object') {
      let toReturn = {};
      Object.keys(item)
        .forEach(k => {
          if (k === 'ref') {
            Object.assign(toReturn, this.resolveRefs(item[k]));
            toReturn['id'] = item[k].substring(1).split('.').pop();
          } else if (k === 'attributes') {
            toReturn[k] = Object.assign(toReturn[k] || {}, this.resolveRefs(item[k]));
          }
          else toReturn[k] = this.resolveRefs(item[k])
        });
      return toReturn;
    } else if (typeof item === 'string' && item[0] === '$') {
      let { schema } = this.props;
      let keys = item.substring(1).split('.');
      let data = keys.reduce((obj, key) => obj[key], schema);
      return this.resolveRefs(data);
    } else return item;
  }

  components({ type, from } = {}) {
    return importedComponent(() => {
      let path = findComponent(type, true) || from;
      // use the template string (`...`) because "import" function not working with variables
      return import(`${path}`);
    }, {
      LoadingComponent: () => 'loading',
      ErrorComponent: () => 'error'
    })
  }

  pages(pageId) {
    let page = this.resolveRefs(pageId) || [];
    let { content } = page;
    if (Array.isArray(page)) content = page;
    let ThisPage = this.props.Page;
    let ThisSection = this.props.Section;
    return <ThisPage {...page}>
      {content.map((item, i) => <ThisSection key={i} {...item} Component={this.components(item)} />)}
    </ThisPage>
  }

  templates(templateId, children) {
    let template = this.resolveRefs(templateId) || [];
    let { content } = template;
    if (Array.isArray(template)) content = template;
    let ThisTemplate = this.props.Template;
    let ThisSection = this.props.Section;
    return <ThisTemplate {...template}>
      {content.map((item, i) => {
        return <ThisSection key={i} {...item} Component={this.components(item)} children={children} />
      })}
    </ThisTemplate>
  }

  getRoutes(schema, parent = '/', key) {
    let type = Array.isArray(schema) ? 'array' : typeof schema;
    switch (type) {
      case 'array': {
        return schema.map((schemaItem, i) => this.getRoutes(schemaItem, parent, i));
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
        let { template, content, children, path, exact, transition } = schema;
        let absPath = Array.isArray(path) ?
          path.map(p => urlJoin(parent, p))
          : urlJoin(parent, path || '/');
        let props = {
          path: path ? absPath : getThisPaths(children).flat(),
          key,
          exact
        }
        let childrenRoutes = <>
          {content && this.pages(content)}
          {children && <AnimatedSwitch {...getTransition(transition)}>
            {this.getRoutes(children, absPath)}
          </AnimatedSwitch>}
        </>;
        return <Route {...props} >
          {template ?
            this.templates(template, childrenRoutes) :
            childrenRoutes
          }
        </Route>
      }
      default:
        throw 'Invalid type: ' + type;
    }
  }

  render() {
    return this.state.allRoutes;
  }
}

export const RouterController = (props) => {
  let RController = withRouter(Controller);
  return (<RController {...props} />);
}

export const BrowserRouterController = (props) => {
  let RController = withRouter(Controller);
  return (<BrowserRouter><RController {...props} /></BrowserRouter>);
}

export const HashRouterController = (props) => {
  let RController = withRouter(Controller);
  return (<HashRouter><RController {...props} /></HashRouter>);
}