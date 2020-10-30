import importedComponent from 'react-imported-component';
import Navbar from "./components/navbar";
import Container from "./components/container";
import Hero from "./components/hero";
import Footer from "./components/footer";
import TableJexcel from "./components/table-jexcel";
import Grid from "./components/grid";
import NavSide from "./components/nav-side";
import NavService from "./components/nav-service";
import NavCards from './components/nav-cards';
import Component from "./components/component";

export default (type = false) => {
  let path;
  switch (type) {
    case 'navbar':
      return Navbar;
    case 'container':
      return Container;
    case 'hero':
      return Hero;
    case 'footer':
      return Footer;
    case 'tableJexcel':
    case 'table-jexcel':
      return TableJexcel;
    case 'grid':
      return Grid;
    case 'navSide':
    case 'nav-side':
      return NavSide;
    case 'navService':
    case 'nav-service':
      return NavService;
    case 'navCards':
    case 'nav-cards':
      return NavCards;
    default:
      path = type;
  }
  if (!path) return Component;
  return importedComponent(() => {
    // use the template string (`...`) because "import" function not working with variables
    return import(`${path}`);
  }, {
    LoadingComponent: () => 'loading',
    ErrorComponent: () => 'error'
  })
}