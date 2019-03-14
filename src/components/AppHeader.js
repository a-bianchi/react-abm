import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    title: PropTypes.string.isRequired,
};


const AppHeader = ({title}) => {
    return (
        <div>
            <div className="app-header">
                <h1>{title}</h1>
            </div>
        </div>
    );
};


AppHeader.propTypes = propTypes;


export default AppHeader;
