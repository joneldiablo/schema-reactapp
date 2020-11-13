import React from 'react';

import { iconSet } from "dbl-components/lib/js/media/icons";
import Navbar from "dbl-components/lib/js/navigation/navbar";
import Container from "dbl-components/lib/js/containers/container";
import ResizeContainer from "dbl-components/lib/js/containers/resize-container";
import FooterContainer from "dbl-components/lib/js/containers/footer-container";
import CardsNavigation from "dbl-components/lib/js/navigation/cards-navigation";
import SideNavigation from "dbl-components/lib/js/navigation/side-navigation";
import JexcelTable from "dbl-components/lib/js/tables/jexcel-table";
import ServiceListNavigation from "dbl-components/lib/js/navigation/service-list-navigation"
import { HashRouterController } from "../src/js/controller";
import { Template, Page, Section } from "../src/js/editor-containers";

import 'bootstrap';
import '../src/scss/style.scss';

const schema = require('./schemas/admin-v.json');
const schemaMF = require('./schemas/admin-responsive.json');
const adminComponents = {
  Navbar,
  ResizeContainer,
  Container,
  CardsNavigation,
  FooterContainer,
  SideNavigation,
  JexcelTable,
  ServiceListNavigation
};
iconSet(require('../icons/selection.json'));

export default {
  title: 'Admin Example'
};

export const AdminInit = () => <>
  <HashRouterController schema={schema} components={adminComponents} />
</>

export const AdminEditor = () => <>
  <HashRouterController schema={schema} Template={Template} Page={Page} Section={Section} />
</>

export const AdminMobileFirst = () => <>
  <HashRouterController schema={schemaMF} />
</>