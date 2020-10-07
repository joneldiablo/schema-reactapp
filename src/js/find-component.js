export default (type, defaultComponent) => {
  switch (type) {
    case 'navbar':
      return './components/navbar';
    case 'container':
      return './components/container';
    case 'hero':
      return './components/hero';
    case 'footer':
      return './components/footer';
    default:
      return defaultComponent ? './components/component' : false;
  }
}