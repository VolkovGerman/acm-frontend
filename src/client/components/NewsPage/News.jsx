import React, {Component} from 'react';

import Article from './ArticleComponent/Article';
import LatestNews from './LatestNewsComponent/LatestNews';
import TwoColumns from '../LayoutsComponents/TwoColumnsComponent/TwoColumns';

require('./News.scss');

class News extends Component {
    render() {
        return (
            <div className="News clearfix">
                <TwoColumns layout={{
                    general: <Article item={{id: this.props.params.news_id}}/>,
                    sub: <LatestNews />
                }}/>
            </div>
        );
    }
}

export default News;
