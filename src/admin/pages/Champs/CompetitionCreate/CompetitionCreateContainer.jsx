import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCurrentCompetition, handlePostCompetition, handlePutCompetition, flushCompetition} from '../../../actions/competitions';
import {setPageTitle} from '../../../actions/interfaces';
import CompetitionCreate from './CompetitionCreate';

const mapStateToProps = (state) => {
    return {
        competitions: state.competitions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCurrentCompetition: bindActionCreators(handleLoadingCurrentCompetition, dispatch),
        handlePostCompetition: bindActionCreators(handlePostCompetition, dispatch),
        handlePutCompetition: bindActionCreators(handlePutCompetition, dispatch),
        flushCompetition: bindActionCreators(flushCompetition, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionCreate);
