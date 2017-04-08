import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLoadingNews } from '../../actions/news';
import Index from './Index';

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingNews: bindActionCreators(handleLoadingNews, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
