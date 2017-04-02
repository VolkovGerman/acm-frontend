import React, {Component} from 'react';

require('./TwoColumns.scss');

class TwoColumns extends Component {
    render() {
        return (
            <div className="TwoColumns">
                <div className="content clearfix">
                    <div className="generalWrap">
                        {this.props.layout.general}
                    </div>
                    <div className="subWrap">
                        {this.props.layout.sub}
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoColumns;
