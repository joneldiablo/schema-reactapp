import React from 'react';
import { HashRouterController } from "../src/controller";
const schema = require('./schemas/ecommerce.json');

export default {
  title: 'Hash Controller',
  component: HashRouterController,
};

export const hashRouterController = () => <HashRouterController schema={schema} />