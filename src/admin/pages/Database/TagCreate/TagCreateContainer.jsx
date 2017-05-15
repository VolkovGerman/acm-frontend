import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCurrentTag, handlePostTag, handlePutTag, flushTag} from '../../../actions/tags';
import {setPageTitle} from '../../../actions/interfaces';
import TagCreate from './TagCreate';

const mapStateToProps = (state) => {
    return {
        tags: state.tags
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCurrentTag: bindActionCreators(handleLoadingCurrentTag, dispatch),
        handlePostTag: bindActionCreators(handlePostTag, dispatch),
        handlePutTag: bindActionCreators(handlePutTag, dispatch),
        flushTag: bindActionCreators(flushTag, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TagCreate);
