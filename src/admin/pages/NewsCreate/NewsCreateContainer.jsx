import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingNews} from '../../actions/news';
import {setPageTitle} from '../../actions/interfaces';
import NewsCreate from './NewsCreate';

const mapStateToProps = (state) => {
    return {
        news: state.news,
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingNews: bindActionCreators(handleLoadingNews, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsCreate);
