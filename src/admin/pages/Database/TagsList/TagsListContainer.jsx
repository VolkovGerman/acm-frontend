import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingTagsList, handleDeleteTags} from '../../../actions/tags';
import {setPageTitle} from '../../../actions/interfaces';
import TagsList from './TagsList';

const mapStateToProps = (state) => {
    return {
        tags: state.tags,
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingTagsList: bindActionCreators(handleLoadingTagsList, dispatch),
        handleDeleteTags: bindActionCreators(handleDeleteTags, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsList);
