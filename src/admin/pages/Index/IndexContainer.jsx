import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleMenu} from '../../actions/interfaces';
import Index from './Index';

const mapStateToProps = (state) => {
    return {
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: bindActionCreators(toggleMenu, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
