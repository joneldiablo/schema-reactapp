import React from 'react';
import Icons from '../src/icons';
const { icons } = require('../icons/selection.json');

export default {
  title: 'Icons'
};

export const AllIcons = () => <div >
  {icons.map((icon, i) => <span className="mr-4 text-nowrap" key={i}>
    <Icons icon={icon.properties.name}></Icons>&nbsp;{icon.properties.name}
  </span>)}
</div>