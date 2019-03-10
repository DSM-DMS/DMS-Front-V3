import React from 'react';

import { withRouter } from "react-router-dom";

const HeaderButton = ({title}) => {
    return (
        <span className="admin_header--button--link">
            {title}
        </span>
    );
};

export default withRouter(HeaderButton);

