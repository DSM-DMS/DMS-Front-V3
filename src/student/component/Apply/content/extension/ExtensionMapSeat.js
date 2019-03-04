import React from 'react';

import './ExtensionMapSeat.scss';

const ExtensionMapSeat = ({
  content,
  invisibleClass,
  selectedClass,
  onClick
}) => {
  return (
    <td
      className={`apply--content--extension--seat ${invisibleClass} ${selectedClass}`}
      onClick={() => onClick(content)}
    >
      {content}
    </td>
  );
};

export default ExtensionMapSeat;
