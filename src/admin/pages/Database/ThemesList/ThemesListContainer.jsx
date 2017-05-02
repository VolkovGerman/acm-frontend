import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingThemesList, handleDeleteThemes} from '../../../actions/themes';
import {setPageTitle} from '../../../actions/interfaces';
import ThemesList from './ThemesList';

const mapStateToProps = (state) => {
    return {
        themes: state.themes,
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingThemesList: bindActionCreators(handleLoadingThemesList, dispatch),
        handleDeleteThemes: bindActionCreators(handleDeleteThemes, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemesList);
