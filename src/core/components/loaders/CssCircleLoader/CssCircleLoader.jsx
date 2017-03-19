import React from 'react';

require('./CssCircleLoader.css');

class CssCircleLoader extends React.Component {
    render = () =>
        <div className="cssload-loader">
            <div className="cssload-side"></div>
            <div className="cssload-side"></div>
            <div className="cssload-side"></div>
            <div className="cssload-side"></div>
            <div className="cssload-side"></div>
            <div className="cssload-side"></div>
            <div className="cssload-side"></div>
            <div className="cssload-side"></div>
        </div>
}

export default CssCircleLoader;
