import React from 'react';

require('./SlideShow.scss');

class SlideShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideChildren: this.initSlideChildren(0)
        }
    }

    initSlideChildren = (activePageId) => React.Children.map(this.props.children,
        (slide, index) => React.cloneElement(slide, {
            id: index,
            slidePage: this.slidePage,
            activePageId: activePageId,
            slidesCount: this.props.children.length,
        })
    );

    slidePage = (pageId, slideDirection) => {
        let activePageId = pageId;
        if (slideDirection === true || slideDirection === 'next') {
            activePageId++;
        } else if (slideDirection === false || slideDirection === 'back') {
            activePageId--;
        }

        this.setState({
            slideChildren: this.initSlideChildren(activePageId)
        });
    };

    render = () =>
        <div className="SlideShow">
            {this.state.slideChildren}
        </div>
}

export default SlideShow;
