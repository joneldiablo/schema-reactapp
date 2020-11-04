import React from 'react';
import { HashRouterController } from "../src/js/controller";
import 'bootstrap';
import "jexcel/dist/jexcel.css";
import '../src/scss/style.scss';

const schema = require('./schemas/admin-v.json');
const schemaMF = require('./schemas/admin-responsive.json');

export default {
  title: 'Admin Example'
};

export const AdminInit = () => <>
  <HashRouterController schema={schema} />
</>

export const AdminMobileFirst = () => <>
  <HashRouterController schema={schemaMF} />
</>