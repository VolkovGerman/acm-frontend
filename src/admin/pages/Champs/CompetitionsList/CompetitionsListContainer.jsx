import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingCompetitions, handleDeleteCompetitions} from '../../../actions/competitions';
import {setPageTitle} from '../../../actions/interfaces';
import CompetitionsList from './CompetitionsList';

const mapStateToProps = (state) => {
    return {
        competitions: state.competitions,
        interfaces: state.interfaces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCompetitions: bindActionCreators(handleLoadingCompetitions, dispatch),
        handleDeleteCompetitions: bindActionCreators(handleDeleteCompetitions, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsList);
