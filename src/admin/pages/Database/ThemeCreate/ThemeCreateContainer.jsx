import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCurrentTheme, handlePostTheme, handlePutTheme, flushTheme} from '../../../actions/themes';
import {setPageTitle} from '../../../actions/interfaces';
import ThemeCreate from './ThemeCreate';

const mapStateToProps = (state) => {
    return {
        themes: state.themes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCurrentTheme: bindActionCreators(handleLoadingCurrentTheme, dispatch),
        handlePostTheme: bindActionCreators(handlePostTheme, dispatch),
        handlePutTheme: bindActionCreators(handlePutTheme, dispatch),
        flushTheme: bindActionCreators(flushTheme, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeCreate);
