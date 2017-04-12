import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingNews} from '../../actions/news';
import {handleLoadingEvents} from '../../actions/events';
import {handleInitLang} from '../../actions/langs';
import Index from './Index';

const mapStateToProps = (state) => {
    return {
        news: state.news,
        events: state.events,
        langs: state.langs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInitLang: bindActionCreators(handleInitLang, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
