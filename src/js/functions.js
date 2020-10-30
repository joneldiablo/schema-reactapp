import urlJoin from "url-join";

let schema;

export const setSchema = (s) => {
  schema = s;
}

export const assets = (type, value = '') => {
  if (!schema) throw 'Schema is not defined. import setSchema first and pass the eschema as param';
  return urlJoin(schema.domain, schema.assets[type], value);
}

export const randomS4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}