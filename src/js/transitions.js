
const transitions = {
  fade: {
    atEnter: { opacity: 0 },
    atLeave: { opacity: 0 },
    atActive: { opacity: 1 },
    mapStyles: ({ opacity }) => ({
      opacity: opacity != 1 ? opacity : null
    })
  },
  slideRight: {
    atEnter: { offset: -100, opacity: 0 },
    atLeave: { offset: 100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: ({ offset, opacity }) => ({
      transform: offset != 0 ? `translateX(${offset}%)` : null,
      opacity: opacity != 1 ? opacity : null,
      display: opacity === 1 ? 'block' : null
    })
  },
  slideLeft: {
    atEnter: { offset: 100, opacity: 0 },
    atLeave: { offset: -100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: ({ offset, opacity }) => ({
      transform: offset != 0 ? `translateX(${offset}%)` : null,
      opacity: opacity != 1 ? opacity : null,
      display: opacity === 1 ? 'block' : null
    })
  },
  slideTop: {
    atEnter: { offset: 100, opacity: 0 },
    atLeave: { offset: -100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: ({ offset, opacity }) => ({
      transform: offset != 0 ? `translateY(${offset}%)` : null,
      opacity: opacity != 1 ? opacity : null,
      display: opacity === 1 ? 'block' : null
    })
  },
  slideBottom: {
    atEnter: { offset: -100, opacity: 0 },
    atLeave: { offset: 100, opacity: 0 },
    atActive: { offset: 0, opacity: 1 },
    mapStyles: ({ offset, opacity }) => ({
      transform: offset != 0 ? `translateY(${offset}%)` : null,
      opacity: opacity != 1 ? opacity : null,
      display: opacity === 1 ? 'block' : null
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