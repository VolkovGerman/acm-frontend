import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingNews} from '../../actions/news';
import {handleLoadingEvents} from '../../actions/events';
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        news: state.news,
        events: state.events,
        langs: state.langs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingNews: bindActionCreators(handleLoadingNews, dispatch),
        handleLoadingEvents: bindActionCreators(handleLoadingEvents, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
