import React from 'react';
import { HashRouterController } from "../src/js/controller";
import 'bootstrap';
import "jexcel/dist/jexcel.css";
import '../src/scss/style.scss';

const schema = require('./schemas/admin-v.json');

export default {
  title: 'Admin Example'
};

export const Admin = () => <>
  <HashRouterController schema={schema} />
</>