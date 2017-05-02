import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingThemes} from '../../actions/themes';
import {handleLoadingTags} from '../../actions/tags';
import {handleLoadingCurrentNews, handlePostNews, handlePutNews, flushNews} from '../../actions/news';
import {setPageTitle} from '../../actions/interfaces';
import NewsCreate from './NewsCreate';

const mapStateToProps = (state) => {
    return {
        themes: state.themes,
        tags: state.tags,
        news: state.news
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingThemes: bindActionCreators(handleLoadingThemes, dispatch),
        handleLoadingTags: bindActionCreators(handleLoadingTags, dispatch),
        handleLoadingCurrentNews: bindActionCreators(handleLoadingCurrentNews, dispatch),
        handlePostNews: bindActionCreators(handlePostNews, dispatch),
        handlePutNews: bindActionCreators(handlePutNews, dispatch),
        flushNews: bindActionCreators(flushNews, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsCreate);
