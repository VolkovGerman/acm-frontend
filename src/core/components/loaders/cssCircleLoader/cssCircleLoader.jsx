import React from 'react';

require('./cssCircleLoader.css');

class cssCircleLoader extends React.Component {
    render = () =>
        <div class="cssload-loader">
            <div class="cssload-side"></div>
            <div class="cssload-side"></div>
            <div class="cssload-side"></div>
            <div class="cssload-side"></div>
            <div class="cssload-side"></div>
            <div class="cssload-side"></div>
            <div class="cssload-side"></div>
            <div class="cssload-side"></div>
        </div>
}