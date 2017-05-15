import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    handleLoadingCompetitions,
    handleLoadingCompetitionSections,
    handleLoadingCompetitionThenSections
} from '../../actions/competitions';

import CompetitionPage from './CompetitionPage';

const mapStateToProps = (state) => {
    return {
        competitions: state.competitions,
        langs: state.langs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCompetitions: bindActionCreators(handleLoadingCompetitions, dispatch),
        handleLoadingCompetitionSections: bindActionCreators(handleLoadingCompetitionSections, dispatch),
        handleLoadingCompetitionThenSections: bindActionCreators(handleLoadingCompetitionThenSections, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPage);
