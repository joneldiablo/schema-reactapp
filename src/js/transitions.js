
const transitions = {
  fade: {
    atEnter: { opacity: 0 },
    atLeave: { opacity: 0 },
    atActive: { opacity: 1 }
  },
  slideRight: {
    atEnter: { offset: -100, opacity: 0 },
    atLeave: { offset: 100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: (styles) => ({
      transform: styles.offset != 0 ? `translateX(${styles.offset}%)` : null,
      opacity: styles.opacity
    })
  },
  slideLeft: {
    atEnter: { offset: 100, opacity: 0 },
    atLeave: { offset: -100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: (styles) => ({
      transform: styles.offset != 0 ? `translateX(${styles.offset}%)` : null,
      opacity: styles.opacity
    })
  },
  slideTop: {
    atEnter: { offset: 100, opacity: 0 },
    atLeave: { offset: -100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: (styles) => ({
      transform: styles.offset != 0 ? `translateY(${styles.offset}%)` : null,
      opacity: styles.opacity
    })
  },
  slideBottom: {
    atEnter: { offset: -100, opacity: 0 },
    atLeave: { offset: 100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: (styles) => ({
      transform: styles.offset != 0 ? `translateY(${styles.offset}%)` : null,
      opacity: styles.opacity
    })
  }
};

export default (transition) => {
  let toReturn = Object.assign({
    runOnMount: true,
    className: 'route-wrapper',
  }, transitions[transition] || transitions.fade);
  return toReturn;
}