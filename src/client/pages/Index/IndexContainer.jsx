import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleInitLang} from '../../actions/langs';
import Index from './Index';

const mapStateToProps = (state) => {
    return {
        langs: state.langs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInitLang: bindActionCreators(handleInitLang, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
