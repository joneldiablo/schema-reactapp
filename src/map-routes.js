import urlJoin from "url-join";

const mapRoutes = (schema, parent = '/') => {
  let type = Array.isArray(schema) ? 'array' : typeof schema;
  let allPaths = {};
  switch (type) {
    case 'array': {
      schema.forEach(route => {
        Object.assign(allPaths, mapRoutes(route, parent));
      });
      break;
    }
    case 'object': {
      let { content, children, path } = schema;
      let url;
      if (Array.isArray(path)) {
        path.forEach(p => {
          url = urlJoin(parent, p);
          if (content) Object.assign(allPaths, mapRoutes(content, url));
        });
      } else {
        url = urlJoin(parent, path || '/');
        if (content) Object.assign(allPaths, mapRoutes(content, url));
      }
      if (children)
        Object.assign(allPaths, mapRoutes(children, url));
      break;
    }
    default: {
      allPaths = {
        [parent]: schema
      };
    }
  }
  return allPaths;
}

export default mapRoutes;