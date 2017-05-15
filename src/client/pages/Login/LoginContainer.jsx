import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCompetitions} from '../../actions/competitions';

import Login from './Login';

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
