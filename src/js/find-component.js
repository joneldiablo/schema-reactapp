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
import NavListCards from './components/nav-list-cards';
import Component from "./components/component";

export default (type = false) => {
  let path;
  switch (type) {
    case 'Navbar':
    case 'navbar':
      return Navbar;
    case 'Container':
    case 'container':
      return Container;
    case 'Hero':
    case 'hero':
      return Hero;
    case 'Footer':
    case 'footer':
      return Footer;
    case 'TableJexcel':
    case 'table-jexcel':
      return TableJexcel;
    case 'Grid':
    case 'grid':
      return Grid;
    case 'NavSide':
    case 'nav-side':
      return NavSide;
    case 'NavService':
    case 'nav-service':
      return NavService;
    case 'NavCards':
    case 'nav-cards':
      return NavCards;
    case 'NavListCards':
    case 'nav-list-cards':
      return NavListCards;
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