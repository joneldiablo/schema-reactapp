export default (type) => {
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
      return './components/component';
  }
}