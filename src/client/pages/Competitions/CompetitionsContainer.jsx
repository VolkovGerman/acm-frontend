import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCompetitions} from '../../actions/competitions';

import Competitions from './Competitions';

const mapStateToProps = (state) => {
    return {
        competitions: state.competitions,
        langs: state.langs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCompetitions: bindActionCreators(handleLoadingCompetitions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Competitions);
