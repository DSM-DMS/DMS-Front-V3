import React from 'react';

import './ExtensionMapSeat.scss';

const ExtensionMapSeat = ({
  content,
  invisibleClass,
  selectedClass,
  preventClass,
  onClick
}) => {
  return onClick === undefined ? (
    <td
      className={`apply--content--extension--seat ${invisibleClass} ${selectedClass} ${preventClass}`}
    >
      {preventClass === undefined ? content : '불가'}
    </td>
  ) : (
    <td
      className={`apply--content--extension--seat ${invisibleClass} ${selectedClass} ${preventClass}`}
      onClick={() => onClick(content)}
    >
      {content}
    </td>
  );
};

export default ExtensionMapSeat;
