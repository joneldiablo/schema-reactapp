import urlJoin from "url-join";

let schema = {
  domain: null,
  assets: {
    images: null,
    icons: null,
    files: null,
    fonts: null,
  }
};

export const setSchema = (s) => {
  schema = s;
}

export const assets = (type, value = '') => {
  if (!schema) throw 'Schema is not defined. import setSchema first and pass the eschema as param';
  return urlJoin(schema.domain, schema.assets[type], value);
}