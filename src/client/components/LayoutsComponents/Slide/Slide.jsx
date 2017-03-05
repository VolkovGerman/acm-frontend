import React from 'react';
import {connect} from 'react-redux';

import DefaultButton from '../../Buttons/DefaultButton/DefaultButton';
import DefaultHeader from '../../Headers/DefaultHeader/DefaultHeader';

require('./Slide.scss');

class Slide extends React.Component {
    static propTypes = {
        title: React.PropTypes.string
    };

    static defaultProps = {
        title: ''
    };

    slideHandlerNext = (e) => {
        e.preventDefault();
        this.props.slidePage(this.props.id, 'next');
    };

    slideHandlerBack = (e) => {
        e.preventDefault();
        this.props.slidePage(this.props.id, 'back');
    };

    slideHandlerComplete = (e) => {
        e.preventDefault();

        console.log('Complete!');
    };

    render = () =>
        <div className="Slide">
            {this.props.activePageId === this.props.id &&
            <div className="slide__content">
                <DefaultHeader name={this.props.title}/>
                {this.props.children}
                <div className="buttons">
                    {this.props.id > 0 &&
                    <div className="buttons__button">
                        <DefaultButton name={this.props.lang.back} click={this.slideHandlerBack}/>
                    </div>
                    }
                    {this.props.id < this.props.slidesCount - 1 &&
                    <div className="buttons__button">
                        <DefaultButton name={this.props.lang.next} click={this.slideHandlerNext}/>
                    </div>
                    }
                    {this.props.id === this.props.slidesCount - 1 &&
                    <div className="buttons__button">
                        <DefaultButton name={this.props.lang.complete} click={this.slideHandlerComplete}/>
                    </div>
                    }
                </div>
            </div>
            }
        </div>
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Slide);
