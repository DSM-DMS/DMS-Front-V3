import React from 'react';

import './ExtensionMapSeat.scss';

const ExtensionMapSeat = ({ content, invisibleClass }) => {
  return <td className={`apply--content--extension--seat ${invisibleClass}`}>{content}</td>;
};

export default ExtensionMapSeat;
